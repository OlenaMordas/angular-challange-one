import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES_ROUTES } from './directive-docs/directives.routes';
import { DirectiveDocsComponent } from './directive-docs/directive-docs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DirectiveDocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ]
})
export class DirectivesModule { }
