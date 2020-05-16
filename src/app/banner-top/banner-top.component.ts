import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.css']
})
export class BannerTopComponent implements OnInit {
  bannerColor = 'green'
  bannerTextColor = 'white'
  bannerText = "Unclassified"
  position = 'top'
  notchRotation = '-4'
  fontSize = "12px"

  constructor() { }

  ngOnInit(): void {
  }

}
