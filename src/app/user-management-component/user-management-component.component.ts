import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrls: ['./user-management-component.component.css']
})
export class UserManagementComponentComponent implements OnInit {
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.43.186:8080/';
  // baseUrl = 'http://127.0.0.1:8080/';
  currentUser: User;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.fb.group({
      'userName': [''],
      'password': [''],
    });

    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }

  ngOnInit(): void {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
  }

  search() {
    const params = new HttpParams()
      .set('userName', this.userName.value)
      .set('password', this.password.value)
    console.log(this.userName.value)
    if (this.userName.value) {
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users/' + params);
    } else {
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
    }
  }

  add() {
    console.log(this.myForm.value);
    this.httpClient.post(this.baseUrl + 'useradd', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('添加成功!');
        }
      })
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
  }

  select(u: User) {
    this.currentUser = u;
    this.myForm.setValue(this.currentUser);

  }

  delete() {
    const params = new HttpParams()
      .set('userName', this.currentUser.userName)
      .set('password', this.currentUser.password)
    if (!this.currentUser) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.delete(this.baseUrl + 'userdel/' + params).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('删除成功！');
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
          }
        }
      )
      console.log(this.currentUser.userName)
    }
  }

  update() {
    if (!this.currentUser) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.put(this.baseUrl + 'userup', this.myForm.value).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('修改成功！');
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
          }
        }
      )
    }

  }
}
