import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../class/user'
import { ProfileService } from '../../service/profile/profile.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Users : User;

  UserAllCheck : any[];
  
  constructor(private router: Router,
    private profileService: ProfileService){

  }
  ngOnInit(): void {

    this.profileService.getAll().subscribe(data => {

      this.UserAllCheck = data;
      console.log("Get user Sucress");
      console.log( this.UserAllCheck);
    })


    
  }

  onSubmit(form: NgForm) {
    // console.log(form.value['name']);  // { first: '', last: '' }
    this.Users = form.value;
    console.log(this.Users);

    if(this.validate(this.Users)){
      this.profileService.addUser(form.value).subscribe(data => {
     
        console.log("Add Succress");

        this.router.navigate([''], { replaceUrl: true });
      });
    }else{

      
    }
   

  }

  validate(User:User):Boolean {

      for(let data of this.UserAllCheck){

        if (User.username == data.username) {
          console.log("Please fill in information.");
          return false;
        } else if(User.username == ""){
          console.log("Please fill in information.");
          return false;
        }else if(User.password == ""){
          console.log("Please fill in information.");
          return false;
        }else if(User.name == ""){
          console.log("Please fill in information.");
          return false;
        }else if(User.email == ""){
          console.log("Please fill in information.");
          return false;
        }else if(User.address == ""){

          console.log("Please fill in information.");
          return false;
        }
        else {//

          console.log("Username already exists or missing information.");
          return true;
        }

      }
  
  }
  

}
