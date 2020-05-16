import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-btn',
  templateUrl: './image-btn.component.html',
  styleUrls: ['./image-btn.component.css']
})
export class ImageBtnComponent implements OnInit {
  @Input() image : string
  @Input() height : string = "150px"
  @Input() title : string
  @Input() description : string
  @Input() routerLink : string
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
