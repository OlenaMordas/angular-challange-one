import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app.routes';
import { AppComponent } from './app.component';
import { PageTopComponent } from './component/page-top/page-top.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MiscDocsComponent } from './misc/misc-docs/misc-docs.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageTopComponent,
    MiscDocsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
