import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input()
  public isToggled = false;

  onClick(){
    this.isToggled = !this.isToggled;
  }
}
