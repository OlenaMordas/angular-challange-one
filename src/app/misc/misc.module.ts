import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MISC_ROUTES } from './misc.routes';
import { SharedModule } from '../shared/shared.module';
import { MiscDocsComponent } from './misc-docs/misc-docs.component';


@NgModule({
  declarations: [MiscDocsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MISC_ROUTES)
  ]
})
export class MiscModule { }
