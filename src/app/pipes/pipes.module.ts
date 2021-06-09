import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../component/components.module';
import { PipeDocsComponent } from './pipe-docs/pipe-docs.component';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';



@NgModule({
  declarations: [PipeDocsComponent, TruncatePipe],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(PIPES_ROUTES),
  ],
})
export class PipesModule { }
