import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workspace-detail-details',
  templateUrl: './workspace-detail-details.component.html',
  styleUrls: ['./workspace-detail-details.component.css']
})
export class WorkspaceDetailDetailsComponent implements OnInit {
  @Input() workspace

  constructor() { }

  ngOnInit(): void {
  }

}
