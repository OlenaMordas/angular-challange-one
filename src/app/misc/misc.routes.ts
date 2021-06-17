import { Routes } from '@angular/router';
import { FormDirtyGuard } from './guards/form-dirty/form-dirty.guard';
import { MiscDocsComponent } from './misc-docs/misc-docs.component';

export const MISC_ROUTES: Routes = [
  { path: 'm', component: MiscDocsComponent, canDeactivate:[FormDirtyGuard] }
];