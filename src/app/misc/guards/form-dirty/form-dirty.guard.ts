import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MiscDocsComponent } from '../../misc-docs/misc-docs.component';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<MiscDocsComponent> {

  canDeactivate(
    component: MiscDocsComponent): boolean {
      if(component.form.dirty){
        return confirm('Your form is dirty, are you sure you want to leave?');
      }
    return true;
  }
  
}
