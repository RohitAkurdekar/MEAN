import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  imgpath:string ="https://avatars.githubusercontent.com/u/114896370?v=4";
  myText = "Ye aapun hain..";


  btnClicked(swain){
    this.myText =swain
  }
}
