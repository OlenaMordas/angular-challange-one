import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../component/card/card.component';
import { FilterArrayPipe } from '../pipes/filter-array.pipe';
import { SnackBarComponent } from '../component/snack-bar/snack-bar.component';
import { TabsComponent } from '../component/tabs/tabs.component';



@NgModule({
  declarations: [CardComponent, FilterArrayPipe, SnackBarComponent, TabsComponent],
  exports: [CardComponent, FilterArrayPipe, SnackBarComponent, TabsComponent],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
