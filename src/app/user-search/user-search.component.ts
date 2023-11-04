import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {


  @ViewChild('usernameInput')
  usernameInput!: ElementRef;


  // To allow data (username) to flow from the child class(user-search) to the parent class(main app)
  @Output() onUserSearch: EventEmitter<any> = new EventEmitter();

  //HostListener for the key combination "Ctrl + K"
  @HostListener('window:keydown.control.k', ['$event'])
  setFocusOnInput(event: KeyboardEvent) {
    event.preventDefault();

    this.usernameInput.nativeElement.focus();
  }



  constructor(private fb: FormBuilder) { }

  userSeacrhForm: FormGroup = this.fb.group({
    username: '',
  });

  ngOnInit(): void { }

  onUserSubmit() {
    console.log(this.userSeacrhForm.value.username)
    this.onUserSearch.emit(this.userSeacrhForm.value.username);
    // this.userSeacrhForm.reset();
  }

}