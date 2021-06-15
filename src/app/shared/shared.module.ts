import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../component/card/card.component';
import { FilterArrayPipe } from '../pipes/filter-array.pipe';



@NgModule({
  declarations: [CardComponent, FilterArrayPipe],
  exports: [CardComponent, FilterArrayPipe],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
