import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocsComponent } from './pipe-docs/pipe-docs.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';



@NgModule({
  declarations: [PipeDocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
