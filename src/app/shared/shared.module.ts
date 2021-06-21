import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../component/card/card.component';
import { FilterArrayPipe } from '../pipes/filter-array.pipe';
import { SnackBarComponent } from '../component/snack-bar/snack-bar.component';



@NgModule({
  declarations: [CardComponent, FilterArrayPipe, SnackBarComponent],
  exports: [CardComponent, FilterArrayPipe, SnackBarComponent],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
