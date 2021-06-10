import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../component/components.module';
import { PipeDocsComponent } from './pipe-docs/pipe-docs.component';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';



@NgModule({
  declarations: [PipeDocsComponent, TruncatePipe, CreditCardFormatterPipe],
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
