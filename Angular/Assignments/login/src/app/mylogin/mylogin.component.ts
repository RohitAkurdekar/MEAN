import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iLoginClass } from './loginClass';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent {
  
  baseurl:string = "assets/loginDB.json";


  constructor(private http:HttpClient) { 
    this.getAllEmp().subscribe(data=>{this.myList=data});
    }

  getAllEmp():Observable<iLoginClass[]>{
    return this.http.get<iLoginClass[]>(this.baseurl);
  }

  myList:iLoginClass[]=[];

  found:string="";

  flag:Boolean=false;

  onSubmit(form:NgForm){
    console.log("Form milala");
    
    
    this.found=""
    this.flag = false;
    console.log(form.value.uname,form.value.passwd)
    for(let info of this.myList)
    {
      if(info.uname == form.value.uname)
      {
        if(info.passwd == form.value.passwd)
        {
          this.flag = true;
          break;
        }
      }
    }
    if(this.flag){this.found = "Tu yaadi madhye aahes";}
    else{this.found = "tu kuthe ghustoy madhech.......";}
  }
}
