import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raadius',
  templateUrl: './raadius.component.html',
  styleUrls: ['./raadius.component.css']
})
export class RaadiusComponent{

   Area:any=" ";
   Circ:any=" ";

   CalcArea(r){
    this.Area = Math.PI * r * r;
    this.Circ = 2 * Math.PI * r;

    console.log(r,this.Area,this.Circ);
   }


}
