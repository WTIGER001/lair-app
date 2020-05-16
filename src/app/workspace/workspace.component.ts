import { Component, OnInit } from '@angular/core';
import { Workspace } from '../model/workspace';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  tab : string = 'overview'
  workspace = new Workspace()
  
  constructor() { }

  ngOnInit(): void {
  }

}
