import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  username: string = "";
  isLoading: boolean = false;

  title: string = "";

  userSearchHandler(username: string) {
    this.username = username;
  }

}
