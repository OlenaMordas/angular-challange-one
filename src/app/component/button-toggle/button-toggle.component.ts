import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

  @Input()
  public buttonList:string[];

  @Output()
  public buttonClickEvent = new EventEmitter<string>();

  activeButton='';

  onClick(button){
    this.activeButton = button;
    this.buttonClickEvent.emit(button);
  }

}
