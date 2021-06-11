import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Directive({
  selector: '[debounce]'
})
export class DebounceDirective  implements OnInit, OnDestroy{

  @Output()
  public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription; //only to unsubscribe later

  ngOnInit():void{
    const debounceTimeInMs=500;

    //3. on fired click debounces 500ms and then emits dbounceClick event, which is reffered in html
    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe((value:any)=> this.debounceClick.emit(value));
  }

  public ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) //1. listens to DOM click event
  public clickEvent(event: any):void {
    event.preventDefault();
    event.stopPropagation();
    //2. fires up click subject
    this.clicks.next();
  }
}
