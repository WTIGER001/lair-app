import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {
  workspaces = []
  constructor() { }

  ngOnInit(): void {
  }

}
