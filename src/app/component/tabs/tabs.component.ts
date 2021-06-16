import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent  {

  @Input()
  tabs: Tab[]=[];

  @Output() public selectedTabIndex = new EventEmitter<number>();

  tabClick(clickedTab:Tab, index: number):void{
    for(let tab of this.tabs){
      tab.isActive=false;
    }
    clickedTab.isActive=true;
    this.selectedTabIndex.emit(index);
  }
}
