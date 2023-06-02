import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  implements OnInit{
 
  userList: any[] = [];


  currentPage = 1;
  totalPages = 0;
  newUser: any = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''

   
  };
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    const perPage = 6;
    this.http.get(`https://reqres.in/api/users?page=${this.currentPage}&per_page=${perPage}`).subscribe((response: any) => {
      this.userList = response.data;
      this.totalPages = Math.ceil(response.total / perPage);
    });
  }

  setPage(page: number) {
    this.currentPage = page;
    this.getUserList();
  }
  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index + 1);
  }
  deleteUser(userId: number) {
    
    this.userList = this.userList.filter(user => user.id !== userId);
  }
  handleAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newUser.avatar = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  addUser() {
    const newUserCopy = { ...this.newUser }; 
    this.userList.push(newUserCopy); 
    this.newUser = {
      first_name: '',
      last_name: '',
      email: '',
      avatar: ''
    }; 
  }
 
}