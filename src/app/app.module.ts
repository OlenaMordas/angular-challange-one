import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app.routes';
import { AppComponent } from './app.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { CardComponent } from './component/card/card.component';
import { ComponentDocsComponent } from './component/component-docs/component-docs.component';
import { PageTopComponent } from './component/page-top/page-top.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    PageTopComponent,
    ComponentDocsComponent
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
