import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ComponentDocsComponent } from './component-docs/component-docs.component';
import { COMPONENT_ROUTES } from './component.routes';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';



@NgModule({
  declarations: [
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    ComponentDocsComponent,
    LoaderComponent,
    CreditCardComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENT_ROUTES),
    FormsModule,
  ],
  exports: [
    CardComponent,
    ComponentDocsComponent
  ]
})
export class ComponentsModule { }
