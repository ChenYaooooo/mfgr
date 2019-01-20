import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  currentUrl: String = '';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
    console.log(this.router.url);
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          console.log(this.currentUrl);
        }
      }
    );
  }

}
