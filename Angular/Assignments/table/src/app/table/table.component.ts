import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  people:any[]=[{"name":"Chungu","age":66,"gender":"Male"},
                {"name":"Mungu","age":99,"gender":"Female"},
                {"name":"Lungu","age":1515,"gender":"?"}]
  constructor() { 
    
  }



}
