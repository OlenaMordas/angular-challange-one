import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../component/components.module';
import { PipeDocsComponent } from './pipe-docs/pipe-docs.component';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FilterArrayPipe } from './filter-array.pipe';



@NgModule({
  declarations: [PipeDocsComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe, FilterArrayPipe],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(PIPES_ROUTES),
  ],
  exports: [
    CreditCardFormatterPipe
  ]
})
export class PipesModule { }
