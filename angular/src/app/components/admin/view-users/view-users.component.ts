import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../../user/service/user.service';
import { User } from '../../user/model/user.model';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  users;
  editUser = new User();
  showSucessMessage: boolean;
  serverErrorMessages: string;
  aliasRegex = /[A-Za-z]{3}/;

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res as User[];
      },
      err => {
        console.log(err);
      }
    );
  }

  onDelete(userID){
    console.log(userID);
    if (confirm('Are you sure to delete this user?') === true){
      this.userService.deleteUser(userID).subscribe(() => {
          this.ngOnInit();
      });
    }
  }

  onEditUser(editUser){
    this.editUser = editUser;
  }

  onBackBtn(){
    this.location.back();
  }

  onEditUserSubmit(form: NgForm){
    this.userService.editUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
}
