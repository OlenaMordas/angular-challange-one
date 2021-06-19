import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  @Input()
  public message='';

  public isShown=false;

  show(){
    this.isShown = true; 

    const subscription = of(null).pipe(delay(2900))
      .subscribe({
        complete: ()=> {
          this.isShown = false;
          subscription.unsubscribe();
        }
      })
  }
}
