import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../Layout/Shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {PostsComponent} from './posts/posts.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LoginComponent} from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {CoreModule} from '../../Core/core.module';
import {AbstractionModule} from '../../Abstraction/abstraction.module';
import {ModalService} from '../../Core/Services/ModalService';
import {ModalComponent} from '../Modal/modal.component';
import {FormsModule} from '@angular/forms';
import {MDBRootModule} from 'angular-bootstrap-md';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PostsComponent,
    LoginComponent,
    ModalComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    AbstractionModule,
    CoreModule,
    FormsModule,
    MDBRootModule,
    NgbRatingModule,
  ],
  providers: [
    ModalService
  ]
})
export class PagesModule {
}
