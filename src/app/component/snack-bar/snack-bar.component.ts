import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, OnDestroy {

  @Input()
  public message='';

  public isShown=false;

  constructor(public snackBarService: SnackbarService) {}
 

  sbServiceSubscription: Subscription;
  
  ngOnInit(): void {
    this.sbServiceSubscription= this.snackBarService.snackbar$.subscribe((value)=>{
      this.showMessage(value);
    });
  }

  showMessage(message:string){
    this.isShown = true; 
    this.message = message;
    const subscription = of(null).pipe(delay(2900))
      .subscribe({
        complete: ()=> {
          this.isShown = false;
          subscription.unsubscribe();
        }
      })
  }


  ngOnDestroy(): void {
    this.sbServiceSubscription.unsubscribe();
  }
}
