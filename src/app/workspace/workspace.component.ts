import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import * as shortid from 'shortid';
import { BackendService } from '../backend.service';
import { Workspace } from '../model/workspace';
import { Workspace as IWorkspace } from '../swagger/models'

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  tab : string = 'overview'
  workspace : IWorkspace = new Workspace()
  
  constructor(private router: Router, private backend : BackendService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get("id")
      this.backend.getWorkspace(id).subscribe( workspace => {
        this.workspace =workspace
      })
    })
  }

  save() {
    this.backend.saveWorkspace(this.workspace)
    this.router.navigate(["/workspaces"])
  }
}
