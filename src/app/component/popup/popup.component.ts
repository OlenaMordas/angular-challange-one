import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fadeInOutAnimation } from 'src/app/misc/animations/fade-in-out-animation';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [fadeInOutAnimation]
})
export class PopupComponent {

  @Input()
  message='';

  isShown=false;

  showPopup(){
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
