import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CardComponent } from './component/card/card.component';
import { AccordionComponent } from './component/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
