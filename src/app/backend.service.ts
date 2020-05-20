import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Workspace } from './swagger/models';
import { Router } from '@angular/router';
import { ApiService } from './swagger/services';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private workspaces = []
  private workspace$ = new BehaviorSubject<Workspace[]>(this.workspaces)
  constructor(private router :Router, private api : ApiService) { }

  getWorkspaces() : Observable<Workspace[]> {
    return this.api.getWorkspaces()

    // return this.workspace$
  }

  getWorkspace(id : string) : Observable<Workspace> {
    return this.api.getWorkspaceById(id)
  }

  saveWorkspace( workspace : Workspace) {

    this.api.postWorkpaceById({id: workspace.id, workspace: workspace}).subscribe( () => {})


    // let i = this.workspaces.findIndex( (v: Workspace) => v.id === workspace.id)
    // console.log("Looing for workspace ", workspace);
    
    // if (i >= 0) {
    //   this.workspaces[i] = workspace
    // } else {
    //   this.workspaces.push(workspace)
    //   this.workspace$.next(this.workspaces)
    // }
    // console.log("Workspaces ", this.workspaces);

  }

  launchWorkspace( workspace : Workspace)  {
    this.router.navigate(["/workspace", workspace.id, "launching"])
  }
}
