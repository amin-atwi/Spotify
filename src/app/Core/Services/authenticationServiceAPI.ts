import {Injectable} from '@angular/core';
import proxyconfig from '../../../proxyconfig.json';
import {_URL} from '../Constants/Constants';
import {FirstCallForAuthModel} from '../../Models/LoginModels/FirstCallForAuthModel';
import {SecondCallForAuthModel} from '../../Models/LoginModels/SecondCallForAuthModel';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceAPI {
  readonly authorize!: string;
  readonly token!: string;
  constructor() {
    this.authorize = proxyconfig['/api'].authApi + _URL.authorize;
    this.token = proxyconfig['/api'].authApi + _URL.token;
  }
  FirstCallForAuthorization(firstCallForAuthModel: FirstCallForAuthModel): any {
    let url  = this.authorize;
    url += '?response_type=code';
    url += '&client_id=' + firstCallForAuthModel.client_id;
    url += '&scope=' + firstCallForAuthModel.scopes;
    url += '&redirect_uri=' + firstCallForAuthModel.redirect_uri;
     url += '&show_dialog=true';
    window.location.href = url;
  }
  SecondCallForAuthorization(secondCallForAuthModel: SecondCallForAuthModel): XMLHttpRequest {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.token, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(secondCallForAuthModel.client_id + ':' + secondCallForAuthModel.client_secret));
    let body1 = 'grant_type=authorization_code';
    body1 += '&code=' + secondCallForAuthModel.code;
    body1 += '&redirect_uri=' + secondCallForAuthModel.redirect_uri;
    body1 += '&client_id=' + secondCallForAuthModel.client_id;
    body1 += '&client_secret=' + secondCallForAuthModel.client_secret;
    xhr.send(body1);
    return xhr;
  }
  RefreshToken(): XMLHttpRequest{
    let RefreshToken = localStorage.getItem('refresh_token');
    let client_id = proxyconfig['/Spotify'].ClientId ;
    let client_secret = proxyconfig['/Spotify'].ClientSecret;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.token, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ':' + client_secret));
    let body1 = 'grant_type=refresh_token';
    body1 += '&refresh_token=' + RefreshToken;
    body1 += '&client_id=' + client_id;
    xhr.send(body1);
    return xhr;
  }
}
