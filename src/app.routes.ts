import { Routes } from "@angular/router";
import { ComponentDocsComponent } from "./app/component/component-docs/component-docs.component";
import { DirectiveDocsComponent } from "./app/directives/directive-docs/directive-docs.component";
import { PipeDocsComponent } from "./app/pipes/pipe-docs/pipe-docs.component";
import { ServiceDocsComponent } from "./app/services/service-docs/service-docs.component";

export const APP_ROUTES: Routes = [
    {path: '', component: ComponentDocsComponent},
    {path: 'services', component: ServiceDocsComponent},
    {path: 'directives', component: DirectiveDocsComponent},
    {path: 'pipes', loadChildren: () =>import('./app/pipes/pipes.module').then((m) => m.PipesModule)}
];