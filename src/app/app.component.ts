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
  title = "fyle-frontend-challenge";
  username: string = "";
  isLoading: boolean = false;


  userSearchHandler(username: string) {
    this.username = username;
  }

}
