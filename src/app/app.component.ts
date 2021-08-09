import {Component, OnInit} from '@angular/core';
import {SettingsFacade} from './Abstraction/settingsFacade';
import {ModalService} from './Core/Services/ModalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Spotify';

  constructor(
  ) {
  }

  ngOnInit(): void {
    // Set Modal in SettingsFacade to handle the errors.
  }


}
