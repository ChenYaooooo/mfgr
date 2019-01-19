import { AfterViewInit, Component, OnInit , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-image-auto-play',
  templateUrl: './image-auto-play.component.html',
  styleUrls: ['./image-auto-play.component.css']
})
export class ImageAutoPlayComponent implements AfterViewInit, OnDestroy {
  timer: any;
  constructor() { }

  // ngOnInit() {
  //   this.playImage();
  // }
  ngAfterViewInit() {
    this.routerOnActivate();
  }

  ngOnDestroy() {
    this.routerOnDeactivate();
  }

routerOnActivate() {
  var leftNum = -1800;
  this.timer = setInterval(() => {
    leftNum = leftNum - 1;
    document.getElementById('image-gallery').style.left = leftNum + 'px';
    if (leftNum > 0) {
      leftNum = -1800;
    }
  }, 400);
}


routerOnDeactivate() {
  console.log("false");
  clearInterval(this.timer);
}
}
