import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements OnInit, OnDestroy {

  @Input()
  searchString='';

  @Output()
  public searchUpdate = new EventEmitter();
  public change = new Subject();
  public subscription: Subscription;
  private timeInMs = 300;
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.change
    .pipe(
      debounceTime(this.timeInMs), 
      distinctUntilChanged())
    .subscribe((value:string)=>this.searchUpdate.emit(value));   
  }

  onChange(value){
    this.change.next(value);
  }
}

