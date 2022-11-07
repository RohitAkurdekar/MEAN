import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-proj-details',
  templateUrl: './proj-details.component.html',
  styleUrls: ['./proj-details.component.css']
})

export class ProjDetailsComponent  {
  project = new Project();

  constructor() { }

  getProjectName(){
    return this.project.projName;
  }
}
