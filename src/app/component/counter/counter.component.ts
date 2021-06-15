import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{

  @Input()
  public minNumber=0;

  @Input()
  public maxNumber = Number.MAX_SAFE_INTEGER;

  @Input()
  public value = 0;

  decrementClick(){
    this.value = (this.value-1) < this.minNumber ? this.value : this.value-1;
  }

  incrementClick(){
    this.value = (this.value+1) < this.maxNumber ? this.value+1 : this.value;
  }
}
