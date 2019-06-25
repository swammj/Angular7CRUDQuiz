import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/User.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: number;
  username: string;
  //password: string;
  editForm: FormGroup;
  submitted: boolean = false;
  user: User;
  roleIndex: number;
  role: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.data.changeTitle("Edit User");

    this.editForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.route.queryParams
      .subscribe(params => {
        let userId = params['userId'];
        let username2 = params['username2']
        if (!userId || !username2 ) {
          this.router.navigate(['/list-user']);
        }
        this.userId = userId;
        this.username = username2;
        this.userService.getUser(userId).subscribe( (user: User) => {
           this.role = user.role;
           user.role =  (["ADMIN", "EDITOR", "VIEWER"].indexOf(user.role)).toString();
          this.editForm.patchValue(user);
        })
      });
  }

  onSubmit(){
    this.submitted = true;
    if(this.editForm.valid){
      this.userService.editUser(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
    }
  }

  updateRole(event) {
    this.roleIndex = event.target.value;
  }

  get f() { return this.editForm.controls; }

}
