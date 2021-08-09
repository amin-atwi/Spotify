import {Component, OnInit} from '@angular/core';
import {SettingsFacade} from '../../../Abstraction/settingsFacade';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(
    public settingsFacade: SettingsFacade) {
  }

  ngOnInit(): void {
  }
}
