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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SharedModule } from '../shared/shared.module';
import { CounterComponent } from './counter/counter.component';
import { TableComponent } from './table/table.component';
import { PagingComponent } from './paging/paging.component';
import { TabsComponent } from './tabs/tabs.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { PopupComponent } from './popup/popup.component';
import { CountDownComponent } from './count-down/count-down.component';



@NgModule({
  declarations: [
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    ComponentDocsComponent,
    LoaderComponent,
    CreditCardComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    TableComponent,
    PagingComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    SnackBarComponent,
    PopupComponent,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENT_ROUTES),
    FormsModule,
  ],
  exports: [
    CardComponent,
    SearchListComponent,
    ComponentDocsComponent,
  ]
})
export class ComponentsModule { }
