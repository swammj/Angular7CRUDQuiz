import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

  editUser(EditUserId, EditUserName){
    this.router.navigate(['/edit-user'], { queryParams: { userId: EditUserId, username2: EditUserName} });
  }

  deleteUSer(userId){
    this.userService.deleteUser(userId).subscribe( () => {
      const userIndex = this.users.findIndex( (User) => User.id === userId);
      this.users.splice(userIndex, 1);
    });
  }

}
