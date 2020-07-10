import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { User } from '../../class/user'
import { ProfileService } from '../../service/profile/profile.service'
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  MyUser: User;
  UserAllCheck : any[];

  username: String ="";
  password: String ="";
  constructor(public router: Router,private profileService: ProfileService,private appComponent:AppComponent) { }

  ngOnInit(): void {

    console.log("getStatus : " + this.appComponent.getStatus());

    
    this.profileService.getAll().subscribe(data => {

      this.UserAllCheck = data;
      console.log("Get UserAllCheck Sucress");
  
    })

  }

  login(){




  


    if(this.validate()){

      this.router.navigate(['list', {id:this.MyUser.id}],{ replaceUrl: true });

      console.log('Login Sucress');
       this.appComponent.loginStatus(this.MyUser);

      

    }
    else{

      console.log('Login Fail Wrong username or wrong password.');
    }
    
  }

  validate(): Boolean {

    for(let data of this.UserAllCheck){

        if(data.username == this.username && data.password == this.password){

          this.MyUser = data;
          console.log(this.MyUser);
          return true;
        }
        else{
        
         
        }
    }

    return false;
      
  }

  
  
}
