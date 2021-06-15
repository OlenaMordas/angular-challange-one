import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES_ROUTES } from './directive-docs/directives.routes';
import { DirectiveDocsComponent } from './directive-docs/directive-docs.component';
import { RouterModule } from '@angular/router';
import { DebounceDirective } from './debounce/debounce.directive';
import { ComponentsModule } from '../component/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DirectiveDocsComponent, DebounceDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ]
})
export class DirectivesModule { }
