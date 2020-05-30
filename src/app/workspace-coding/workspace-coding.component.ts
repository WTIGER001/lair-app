import { Component, OnInit } from '@angular/core';
import { Workspace } from '../model/workspace';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { Observable } from 'rxjs';
import { WorkspaceStatus } from '../swagger/models';

@Component({
  selector: 'app-workspace-coding',
  templateUrl: './workspace-coding.component.html',
  styleUrls: ['./workspace-coding.component.css']
})
export class WorkspaceCodingComponent implements OnInit {
  workspace = new Workspace()
  status$ : Observable<WorkspaceStatus>
  status = "Submitting Request"
  showExit = false
  constructor(private route : ActivatedRoute, private backend : BackendService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( p => {
      const id = p.get("id")
      if (id) {
        this.watchStatus(id)
      }
    })
  }

  // Launches the workspace and then looks for the status to be updated
  watchStatus(id : string) {
    this.status$ = this.backend.launchAndWait(id)
    this.status$.subscribe( s => {
      this.status = s.status
    })
  }

  cancel() {
    this.cancel
  }

}
