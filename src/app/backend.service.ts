import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Workspace, WorkspaceStatus } from './swagger/models';
import { Router } from '@angular/router';
import { ApiService } from './swagger/services';
import { delay } from 'rxjs/operators';

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
    this.router.navigate(["/workspace", workspace.id, "coding"])
  }

  launchAndGetStatus(id : string) : Observable<WorkspaceStatus> {
    return this.api.launchWorkpaceById(id)
  }

  launchAndWait(id : string, delayAmt : number = 2000)  : Observable<WorkspaceStatus> {
    const sub = new Subject<WorkspaceStatus>()

    this.api.launchWorkpaceById(id).subscribe( s => {
      this.checkAgain(s, sub, id, delayAmt)
    })

    return sub
  }


  checkAgain(s: WorkspaceStatus, sub : Subject<WorkspaceStatus>, id : string, delayAmt : number) {
    if (s.status == "running") {
      sub.complete()
    } else {
      sub.next(s)
      setTimeout(() => {
        this.api.getWorkpaceLaunchStatus(id).subscribe( s => {
          this.checkAgain(s, sub, id, delayAmt)
        })
      }, delayAmt);
    }
  }
}
