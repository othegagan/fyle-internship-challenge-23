import { Component, HostBinding, effect, signal, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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


}
