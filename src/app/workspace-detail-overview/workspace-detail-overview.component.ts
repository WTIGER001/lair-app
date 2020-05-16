import { Component, OnInit, Input } from '@angular/core';
import { Workspace } from '../model/workspace';

@Component({
  selector: 'app-workspace-detail-overview',
  templateUrl: './workspace-detail-overview.component.html',
  styleUrls: ['./workspace-detail-overview.component.css']
})
export class WorkspaceDetailOverviewComponent implements OnInit {
  @Input() workspace = new Workspace()

  constructor() { }

  ngOnInit(): void {
  }

}
