import { Component, Input, OnInit } from '@angular/core';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon-type.enum';

@Component({
  selector: 'ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent {

  @Input() public location: RibbonLocation = RibbonLocation.TopRight;
  @Input() public type: RibbonType = RibbonType.Info;

  @Input()
  label:string='';
}
