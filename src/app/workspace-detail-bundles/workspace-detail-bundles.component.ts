import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workspace-detail-bundles',
  templateUrl: './workspace-detail-bundles.component.html',
  styleUrls: ['./workspace-detail-bundles.component.css']
})
export class WorkspaceDetailBundlesComponent implements OnInit {
  @Input() workspace

  constructor() { }

  ngOnInit(): void {
  }

}
