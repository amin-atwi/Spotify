import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationServiceAPI} from '../Core/Services/authenticationServiceAPI';
import {HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ModalService} from '../Core/Services/ModalService';
import {FirstCallForAuthModel} from '../Models/LoginModels/FirstCallForAuthModel';
import {SecondCallForAuthModel} from '../Models/LoginModels/SecondCallForAuthModel';
import {SearchServiceAPI} from '../Core/Services/SearchServiceAPI';
import {SearchModelInput} from '../Models/SearchModels/SearchModelInput';

@Injectable()
export class SettingsFacade {
  modalService!: ModalService;
  ModalTitle!: string;
  ModalBody!: string;
  constructor(
    private authenticationServiceAPI: AuthenticationServiceAPI,
    private searchServiceAPI: SearchServiceAPI,
    private router: Router
  ) {
  }

  SetModalService(Modal: ModalService): void {
    this.modalService = Modal;
  }

  FirstCallForAuth(firstCallForAuthModel: FirstCallForAuthModel): any {
    this.authenticationServiceAPI.FirstCallForAuthorization
      (
        new FirstCallForAuthModel(firstCallForAuthModel.client_id, firstCallForAuthModel.redirect_uri , firstCallForAuthModel.scopes)
      );
  }
  SecondCallForAuth(secondCallForAuthModel: SecondCallForAuthModel): any{
    const xhr = this.authenticationServiceAPI.SecondCallForAuthorization
    (
      new SecondCallForAuthModel
      (
        secondCallForAuthModel.client_id,
        secondCallForAuthModel.client_secret,
        secondCallForAuthModel.grant_type,
        secondCallForAuthModel.code,
        secondCallForAuthModel.redirect_uri
      )
    );
    xhr.onload = () => {
      if (xhr.status !== 200) {
        this.openModal('Error', 'Something went wrong');
        return;
      }
      const data = JSON.parse(xhr.response);
      if( data.access_token != undefined && data.refresh_token != undefined){
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        this.ForwardTo('');

      }
    };
  }

  SearchForArtist(searchModel: SearchModelInput): any {
    return this.searchServiceAPI.SearchArtist(searchModel)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if ( error.status === 401){
            this.RefreshToken();
          }else{
            this.openModal('Error', 'Something went wrong');
          }
          return Observable;
        })
      );
  }
  SearchForArtistByUrl(url: string): any {
    return this.searchServiceAPI.SearchArtistByUrl(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if ( error.status === 401){
            this.RefreshToken();
          }else{
            this.openModal('Error', 'Something went wrong');
          }
          return Observable;
        })
      );
  }

  GetArtistAlbums(id: string): any {
    return this.searchServiceAPI.GetArtistAlbums(id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if ( error.status === 401){
            this.RefreshToken();
          }else{
            this.openModal('Error', 'Something went wrong');
          }
          return Observable;
        })
      );
  }
  GetArtistAlbumsByUrl(url: string): any {
    return this.searchServiceAPI.GetArtistAlbumsByUrl(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if ( error.status === 401){
            this.RefreshToken();
          }else{
            this.openModal('Error', 'Something went wrong');
          }
          return Observable;
        })
      );
  }
  RefreshToken() {
    const  xhr = this.authenticationServiceAPI.RefreshToken();
    xhr.onload = () => {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.response);
        if( data.access_token != undefined && data.refresh_token != undefined) {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
        }else{
          this.openModal("Error","Something went wrong");
          this.ForwardTo("login");
        }
      }else{
        console.log(xhr.status);
        this.ForwardTo("login");
      }
    };
  }
  openModal(Tittle: string, Body: string): void {
    this.ModalTitle = Tittle;
    this.ModalBody = Body;
    this.modalService.open('SettingsFacade');
  }
  ForwardTo(RouteName: string): void {
    this.router.navigate(['/' + RouteName]).then();
  }
}
