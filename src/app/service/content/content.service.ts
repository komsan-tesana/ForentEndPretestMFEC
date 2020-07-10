import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content} from '../../class/content'



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  
  private ContentUrl: string;
  

  constructor(public router: Router,private http: HttpClient) { 

    
    
  }

  getAll(): Observable<Content[]> {
    // return this.http.get<Content[]>(this.ContentUrl).map(res => res.json());

    this.ContentUrl = 'http://localhost:8080/content/getAllContent';
     return this.http.get<Content[]>(this.ContentUrl);

  }

  //GET BY ID
  getbyUserId(user_id:String) : Observable<Content[]>{

    this.ContentUrl = 'http://localhost:8080/content/getByid/';
    return this.http.get<Content[]>(this.ContentUrl+user_id);
  }


  //EDIT BY ID
  geteditByContent(idcontent:Number):Observable<Content[]>{


   

    this.ContentUrl = 'http://localhost:8080/content/geteditByContent/';
    return this.http.get<Content[]>(this.ContentUrl+idcontent);
  }

  //DELETE CONTENT
  deletecontent(idcontent:Number){

    console.log(idcontent)


    this.ContentUrl = 'http://localhost:8080/content/deleteContent/';
    return this.http.delete(this.ContentUrl+idcontent).subscribe(
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

  addContent(content:Content){

    
    const peopleArray = Object.keys(content).map(i => content[i])
    
    console.table(content)
    console.log("Service :    "+peopleArray);
    this.ContentUrl = 'http://localhost:8080/content/addContent';
    return this.http.post<Content>(this.ContentUrl,content).subscribe(
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
 

  edit_content(content:Content){

    console.log(content)
    return this.http.put('http://localhost:8080/content/edit_content',content).subscribe(
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
