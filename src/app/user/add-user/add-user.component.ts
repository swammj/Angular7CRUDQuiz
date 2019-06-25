import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  users: User[];
  addForm: FormGroup;
  submitted:boolean = false;
  roleIndex: number;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add User")
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role:['', Validators.required]
    });

  }
  onSubmit(){
    this.submitted = true;
    this.addForm.controls.role.setValue(["ADMIN", "EDITOR", "VIEWER"][this.roleIndex]);
    //console.log(this.addForm.value);
    
    if(this.addForm.valid){
      this.userService.addUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/list-users']);
      });
    }
  }

  get roles() {
    return Role;
  }

  updateRole(event) {
    this.roleIndex = event.target.value;
  }

  get f() { return this.addForm.controls; }

}


