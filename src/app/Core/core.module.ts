import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalService} from './Services/ModalService';
import {AuthenticationServiceAPI} from './Services/authenticationServiceAPI';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationServiceAPI,
    ModalService
  ]
})
export class CoreModule {
}
