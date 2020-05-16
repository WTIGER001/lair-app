import { Component, OnInit } from '@angular/core';
import { WorkspaceCodingComponent } from '../workspace-coding/workspace-coding.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace-exit-dialog',
  templateUrl: './workspace-exit-dialog.component.html',
  styleUrls: ['./workspace-exit-dialog.component.css']
})
export class WorkspaceExitDialogComponent implements OnInit {

  constructor(private hostComponent: WorkspaceCodingComponent, private router: Router) { }

  ngOnInit(): void {
  }
  
  cancel() {
    this.hostComponent.showExit = false
  }

  exit() {
    this.router.navigate(["/home"])
  }

}
