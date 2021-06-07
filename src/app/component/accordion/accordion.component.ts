
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AccrodionItem } from '../../accordion-item.interface';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() 
  public title='';
  @Input()
  public subTitle='';

  @Input()
  public items: AccrodionItem[] = [];

  onClick(item:AccrodionItem){
    item.isExpanded = !item.isExpanded; 
  }

}
