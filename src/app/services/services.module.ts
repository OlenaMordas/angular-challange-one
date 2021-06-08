import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDocsComponent } from './service-docs.component';
import { RouterModule } from '@angular/router';
import { SERVICES_ROUTES } from './services.routes';



@NgModule({
  declarations: [ServiceDocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES)
  ]
})
export class ServicesModule { }
