import { Component, IterableDiffers, OnInit } from '@angular/core';
import { AccrodionItem } from './accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public accordionItems: AccrodionItem[]=[];
  ngOnInit(): void {
    this.accordionItems.push({title:'Example 1', content: 'Content 1', isExpanded: false});
    this.accordionItems.push({title:'Example 2', content: 'Content 2', isExpanded: false})
  }


}
