import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  username: string = "";
  isLoading: boolean = false;


  title: string = "";

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }

  constructor(private apiService: ApiService) {

  }

  userSearchHandler(username: string) {
    this.username = username;
    console.log(username)
  }

  @Input('data') meals: string[] = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };


}
