import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CardComponent } from './component/card/card.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { PageTopComponent } from './component/page-top/page-top.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app.routes';
import { ComponentDocsComponent } from './component/component-docs/component-docs.component';
import { PipeDocsComponent } from './pipes/pipe-docs/pipe-docs.component';
import { ServiceDocsComponent } from './services/service-docs/service-docs.component';
import { DirectiveDocsComponent } from './directives/directive-docs/directive-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    PageTopComponent,
    ComponentDocsComponent,
    ServiceDocsComponent,
    DirectiveDocsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [CardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
