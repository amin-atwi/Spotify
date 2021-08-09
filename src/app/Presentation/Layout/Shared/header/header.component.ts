import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SettingsFacade} from '../../../../Abstraction/settingsFacade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() ToggleSideBarForLeftMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor(

  ) {

  }

  ngOnInit(): void {
  }
}
