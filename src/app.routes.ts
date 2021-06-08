import { Routes } from "@angular/router";
import { ComponentDocsComponent } from "./app/component/component-docs/component-docs.component";

export const APP_ROUTES: Routes = [
    {path: '', component: ComponentDocsComponent},
    {path: 'services', loadChildren: ()=>import ('./app/services/services.module').then((m)=>m.ServicesModule)},
    {path: 'directives', loadChildren: ()=>import('./app/directives/directives.module').then((m)=>m.DirectivesModule)},
    {path: 'pipes', loadChildren: () =>import('./app/pipes/pipes.module').then((m) => m.PipesModule)}
];