import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Workspace } from '../model/workspace';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {
  workspaces = []
  constructor( private backend: BackendService) {
    this.backend.getWorkspaces().subscribe( wrk => this.workspaces = wrk)
   }

  ngOnInit(): void {
  }

  launch(workspace : Workspace) {
    this.backend.launchWorkspace(workspace)
  }


}
