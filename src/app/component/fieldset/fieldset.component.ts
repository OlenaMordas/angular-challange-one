import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent {

  @Input()
  label:string;
  isOpen=true;

}
