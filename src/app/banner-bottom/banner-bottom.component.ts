import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner-bottom',
  templateUrl: './banner-bottom.component.html',
  styleUrls: ['./banner-bottom.component.css']
})
export class BannerBottomComponent implements OnInit {
  bannerColor = 'green'
  bannerTextColor = 'white'
  bannerText = "Unclassified"
  position = 'top'
  notchRotation = '4'
  fontSize = "14px"

  constructor() { }

  ngOnInit(): void {
  }

}
