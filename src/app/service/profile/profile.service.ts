import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private ProfileUrl: string;
 
  

  constructor(public router: Router,private http: HttpClient) {

   }

   
   addUser(user:User){
    // return this.http.get<Content[]>(this.ContentUrl).map(res => res.json());

    console.log(user);
    this.ProfileUrl = 'http://localhost:8080/user/addUser';
    return this.http.post(this.ProfileUrl,user);

  }

  getAll():Observable<User[]>{

    this.ProfileUrl = 'http://localhost:8080/user/getAllUser';
    return this.http.get<User[]>(this.ProfileUrl);
   
  }

   getUserById(id_check:String):Observable<User[]>{

     this.ProfileUrl = 'http://localhost:8080/user/getUserById/';
     return this.http.get<User[]>(this.ProfileUrl+id_check);
     
   }


   editUserDetail(user:User){

      console.log(user);
      this.ProfileUrl = 'http://localhost:8080/user/editUserDetail';
      return this.http.put(this.ProfileUrl,user).subscribe(
        (val) => {
            console.log("POST call successful value returned in body",val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  
   }


 
  


  

}
