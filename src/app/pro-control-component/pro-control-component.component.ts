import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-product-component',
  templateUrl: './pro-control-component.component.html',
  styleUrls: ['./pro-control-component.component.css']
})
export class ProCONTROLComponentComponent implements OnInit {
  myForm: FormGroup;
  id: AbstractControl;
  userName: AbstractControl;
  password: AbstractControl;
  products$: Observable<Product>;
  baseUrl = 'http://192.168.43.186:8080/';
  // baseUrl = 'http://127.0.0.1:8080/';
  currentPro: Product;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.fb.group({
      'id': [''],
      'userName': [''],
      'password': [''],
    });
    this.id = this.myForm.controls['id'];
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }

  ngOnInit(): void {
    this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros');
  }

  search() {
    const params = new HttpParams()
      .set('id', this.id.value)
      .set('userName', this.userName.value)
      .set('password', this.password.value)
    console.log(this.userName.value)
    if (this.id.value) {
      this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros/' + params);
    } else {
      this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros');
    }
  }

  add() {
    console.log(this.myForm.value);
    this.httpClient.post(this.baseUrl + 'proadd', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('添加成功!');
        }
      })
    this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros');
  }

  select(p: Product) {
    this.currentPro = p;
    this.myForm.setValue(this.currentPro);
  }

  delete() {
    const params = new HttpParams()
      .set('id', this.id.value)
      .set('userName', this.currentPro.userName)
      .set('password', this.currentPro.password)
    if (!this.currentPro) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.delete(this.baseUrl + 'prodel/' + params).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('删除成功！');
            this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros');
          }
        }
      )
      console.log(this.currentPro.userName)
    }
  }

  update() {
    if (!this.currentPro) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.put(this.baseUrl + 'proup', this.myForm.value).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('修改成功！');
            this.products$ = <Observable<Product>>this.httpClient.get(this.baseUrl + 'pros');
          }
        }
      )
    }
  }
}