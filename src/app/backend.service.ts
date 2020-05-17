import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Workspace } from './model/workspace';
import { WorkspaceLaunchStatus } from './model/workspace-launch-status';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private workspaces = []
  private workspace$ = new BehaviorSubject<Workspace[]>(this.workspaces)
  constructor(private router :Router) { }

  getWorkspaces() : Observable<Workspace[]> {
    return this.workspace$
  }

  saveWorkspace( workspace : Workspace) {
    let i = this.workspaces.findIndex( (v: Workspace) => v.id === workspace.id)
    console.log("Looing for workspace ", workspace);
    
    if (i >= 0) {
      this.workspaces[i] = workspace
    } else {
      this.workspaces.push(workspace)
      this.workspace$.next(this.workspaces)
    }
    console.log("Workspaces ", this.workspaces);

  }

  launchWorkspace( workspace : Workspace)  {
    this.router.navigate(["/workspace", workspace.id, "launching"])
  }
}
