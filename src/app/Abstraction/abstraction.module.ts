import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsFacade} from './settingsFacade';
import {CoreModule} from '../Core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsFacade,
    CoreModule
  ]
})
export class AbstractionModule {
}
