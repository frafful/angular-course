import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddUserClick() {
    this.userName = '';
  }

  canAddUser() {
    return this.userName.trim().length > 0;
  }

}
