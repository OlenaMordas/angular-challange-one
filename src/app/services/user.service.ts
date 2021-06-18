import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }

  private readonly baseRoute='https://jsonplaceholder.typicode.com/users/'
  ngOnInit(): void {
  }

  getUserById(id:number){
   return this.http.get(`${this.baseRoute}/${id}`).pipe(
     map((value)=>new User(value))
   );    
  }
}
