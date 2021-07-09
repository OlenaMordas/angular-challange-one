import { Component, Input, OnInit } from '@angular/core';
import { PillTypes } from './pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent{
 
  @Input()
  pillType:PillTypes = PillTypes.Info;

  @Input()
  icon: string;

  @Input()
  label: string|PillTypes = this.pillType;

}
