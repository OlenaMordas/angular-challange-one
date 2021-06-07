import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss']
})
export class PageTopComponent {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) {   }

  @HostListener('window:scroll') onWindowScroll() {
    const yCoord = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoord > 200;
  }

  public goToTop(): void{
    this.viewportScroller.scrollToPosition([0,0]); 
  }

}
