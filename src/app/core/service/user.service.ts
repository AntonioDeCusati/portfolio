import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "../models/user.interface";

@Injectable()
export class UserService {

  constructor(private http: HttpClient){}

  getUsers(): Observable<UserInfo>{
    return this.http.get<UserInfo>('https://randomuser.me/api')
  }
}
