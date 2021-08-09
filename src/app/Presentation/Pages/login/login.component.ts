import {Component, OnInit} from '@angular/core';
import {SettingsFacade} from '../../../Abstraction/settingsFacade';
import proxyconfig from '../../../../proxyconfig.json';
import {FirstCallForAuthModel} from '../../../Models/LoginModels/FirstCallForAuthModel';
import {Router} from '@angular/router';
import {SecondCallForAuthModel} from '../../../Models/LoginModels/SecondCallForAuthModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  readonly  ClientId!: string;
  readonly ClientSecret!: string;
  readonly RedirectUri!: string;
  readonly Scopes!: string;
  private href!: string;
  private code!: string;
  constructor(
    public settingsFacade: SettingsFacade,
    private router: Router
  ) {
    this.ClientId = proxyconfig['/Spotify'].ClientId ;
    this.ClientSecret = proxyconfig['/Spotify'].ClientSecret ;
    this.RedirectUri = proxyconfig['/Spotify'].RedirectUri;
    this.Scopes = proxyconfig['/Spotify'].Scopes ;
  }

  ngOnInit(): void {
    this.href = this.router.url;
    const array = this.href.split('=');
    if (array.length > 1){
      this.code = this.router.url.split('=')[1];
      if (this.code === localStorage.getItem('Code')){
        this.router.navigate(['/login']).then();
      }
      localStorage.setItem('Code', this.code);
      this.CallForSecondAuth();
    }else{
      this.router.navigate(['/login']).then();
    }
  }
  CallForSecondAuth(): void {
    this.settingsFacade.SecondCallForAuth
    (
      new SecondCallForAuthModel
      (
        this.ClientId,
        this.ClientSecret,
        'authorization_code',
        this.code,
        this.RedirectUri
      )
    );
  }

  Login(): void {
    this.settingsFacade.FirstCallForAuth(
      new FirstCallForAuthModel(this.ClientId, this.RedirectUri, this.Scopes)
    );
  }
}
