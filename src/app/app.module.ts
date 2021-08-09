import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultModule} from './Presentation/Layout/default/default.module';
import {SharedModule} from './Presentation/Layout/Shared/shared.module';
import {PagesModule} from './Presentation/Pages/pages.module';
import {CoreModule} from './Core/core.module';
import {AbstractionModule} from './Abstraction/abstraction.module';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    HttpClientModule,
    PagesModule,
    CoreModule,
    AbstractionModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
