import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../class/user';
import { ProfileService } from '../../service/profile/profile.service';
import { ContentService } from 'src/app/service/content/content.service';
import { Content } from 'src/app/class/Content';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  add_user: Content = <any>{};
  Myuser: User[];
  id_check: String;
  contents: Content[];

  checkStatus: User = <any>{};
  detailtext: String;

  idcontent: Number;
  title: String;
  detail: String;
  user_id: Number;

  content_edit: Content = <any>{};

  constructor(
    private router: Router,
    private contentService: ContentService,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private appComponent: AppComponent
 
  ) {}

  ngOnInit() {

   
   
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id_check = params.get('id');

      console.log('YOUR ID:' + this.id_check);
      this.appComponent.loginStatus(this.checkStatus);
    });

    
    this.getUserById();
    this.getContentbyid();
    
  }

  public showdetail(id: Number) {
    console.log('id : ' + id);
    console.log(this.contents);
    for (let i = 0; i < this.contents.length; i++) {
      if (this.contents[i]['id'] == id) {
        this.detailtext = this.contents[i]['detail'];
        break;
      } else {
        console.log('ยังหาไม่เจอ');
      }
    }
  }

  getUserById() {
    this.profileService.getUserById(this.id_check).subscribe((data) => {
      this.Myuser = data;


      this.checkStatus.id = this.Myuser[0].id
      this.checkStatus.name = this.Myuser[0].name
      this.checkStatus.username = this.Myuser[0].username
      this.checkStatus.password = this.Myuser[0].password
      this.checkStatus.email = this.Myuser[0].email
      this.checkStatus.address = this.Myuser[0].address


      console.log(this.checkStatus);
      console.log('Get UserAllCheck Sucress');
    
    });
  }

  getContentbyid() {
    this.contentService.getbyUserId(this.id_check).subscribe((data) => {
      this.contents = data;
    });
  }

  ConfirmAdd() {
    this.add_user.user_id = Number(this.id_check);
    this.add_user.title = this.title;
    this.add_user.detail = this.detail;

    console.log(this.add_user);

    this.contentService.addContent(this.add_user);

    this.reloadpage();
  }

  reloadpage() {
    window.location.reload();
  }

  deleteContent(id: Number) {
    this.idcontent = id;
  }

  confirmDelete() {
    this.contentService.deletecontent(this.idcontent);

     this.reloadpage();
  }

  editContent(id: Number) {
    console.log('ดึงข้อมูลด้วย id content สำเร็จ');
    this.contentService.geteditByContent(id).subscribe((data) => {
      console.log(data);

      this.idcontent = data[0].id;
      console.log(this.idcontent);

      this.user_id = data[0].user_id;
      console.log(this.user_id);

      this.title = data[0].title;
      console.log(this.title);


      this.detail = data[0].detail;
      console.log(this.detail);
    });
  }

  confirmEdit() {
    this.content_edit.id = this.idcontent;
    this.content_edit.user_id = this.user_id;
    this.content_edit.title = this.title;
    this.content_edit.detail = this.detail;

    console.log(this.content_edit);

    this.contentService.edit_content(this.content_edit);

      this.reloadpage();
  }
}
