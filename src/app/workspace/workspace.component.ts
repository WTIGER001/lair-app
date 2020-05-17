import { Component, OnInit } from '@angular/core';
import { Workspace } from '../model/workspace';
import { Router } from '@angular/router';
import * as shortid from 'shortid';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  tab : string = 'overview'
  workspace = new Workspace()
  
  constructor(private router: Router, private backend : BackendService) { 

  }

  ngOnInit(): void {
  }

  save() {
    this.backend.saveWorkspace(this.workspace)
    this.router.navigate(["/workspaces"])
  }
}
