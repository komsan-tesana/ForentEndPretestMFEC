import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ContentService } from './service/content/content.service'
import { ProfileService } from './service/profile/profile.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [ContentService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
