import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CopyDirective } from './copy/copy.directive';
import { DebounceDirective } from './debounce/debounce.directive';
import { DirectiveDocsComponent } from './directive-docs/directive-docs.component';
import { DIRECTIVES_ROUTES } from './directive-docs/directives.routes';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';


@NgModule({
  declarations: [DirectiveDocsComponent, DebounceDirective, RippleDirective, ScaleDirective, CopyDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ], 
  providers: [
    {provide: 'Navigator', useValue: navigator},
    {provide: 'Document', useValue: document}
    
  ]
})
export class DirectivesModule { }
