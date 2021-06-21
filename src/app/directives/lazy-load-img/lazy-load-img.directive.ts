import { AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImg]'
})
export class LazyLoadImgDirective implements AfterViewInit , OnDestroy{

  @HostBinding('attr.src') srcAttribute = null;
  @Input() src: string;

  public observer: IntersectionObserver;

  constructor(
    private element: ElementRef,
    @Inject('Document') public document: Document,
    @Inject('Window') public window: Window) { }

  ngAfterViewInit(): void {
    if(this.canLazyLoad()){
      this.observer = new IntersectionObserver(entries => {
        entries.forEach((isIntersecting)=>{
          if(isIntersecting){
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        })
      })
      this.observer.observe(this.element.nativeElement);
    }else {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  private canLazyLoad() :boolean {
    return window && window.hasOwnProperty('IntersectionObserver');
  }

  ngOnDestroy(): void {
    if(this.observer) {
      this.observer.disconnect();
    }
  }
}
