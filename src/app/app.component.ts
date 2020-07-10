import { Component } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../app/class/user';
import { ProfileService } from './service/profile/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MfecTestSkill';
  rootPage: any = HomeComponent;

  Status: Number = 0;

  MyUser: User = <any>{};

  constructor(private profileService: ProfileService,
    private router:Router) {}
  loginStatus(user: User) {
    this.MyUser = user;
    this.Status = 1;
  }

  getStatus(): Number {
    return this.Status;
  }

  removeDisabled(name, email, address) {
    name.disabled = false;
    email.disabled = false;
    address.disabled = false;
  }

  saveEdit() {

    console.log("here saveEdit : " + this.MyUser);
     this.profileService.editUserDetail(this.MyUser);
 
     this.router.navigate(['list' , {id:this.MyUser.id}],{ replaceUrl: true });
  }
}
