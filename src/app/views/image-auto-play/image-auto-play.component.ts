import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-auto-play',
  templateUrl: './image-auto-play.component.html',
  styleUrls: ['./image-auto-play.component.css']
})
export class ImageAutoPlayComponent implements AfterViewInit {

  constructor() { }

  // ngOnInit() {
  //   this.playImage();
  // }
  ngAfterViewInit() {
    this.playImage();
  }

  playImage() {
    var leftNum = -1800;
      // setTimeout(document.getElementById('image-gallery').style.left = leftNum + 'px', 3000);
      window.setInterval(function () {
        leftNum = leftNum - 1;
        document.getElementById('image-gallery').style.left = leftNum + 'px';
        console.log(leftNum);
      if (leftNum > 0) {
        leftNum = -1800;
      }
      }, 100); // repeat forever, polling every 3 seconds

  }
}
