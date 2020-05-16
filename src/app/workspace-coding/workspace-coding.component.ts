import { Component, OnInit } from '@angular/core';
import { Workspace } from '../model/workspace';

@Component({
  selector: 'app-workspace-coding',
  templateUrl: './workspace-coding.component.html',
  styleUrls: ['./workspace-coding.component.css']
})
export class WorkspaceCodingComponent implements OnInit {
  workspace = new Workspace()
  constructor() { }

  ngOnInit(): void {
  }

}
