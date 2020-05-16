import { Component, OnInit } from '@angular/core';
import { Workspace } from '../model/workspace';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace-launch',
  templateUrl: './workspace-launch.component.html',
  styleUrls: ['./workspace-launch.component.css']
})
export class WorkspaceLaunchComponent implements OnInit {
  workspace = new Workspace()
  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(["/workspace/1234/coding"])
    }, 3000)
  }

}
