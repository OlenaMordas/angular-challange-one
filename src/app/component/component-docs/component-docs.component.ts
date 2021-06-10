import { Component, OnInit } from '@angular/core';
import { AccrodionItem } from 'src/app/accordion-item.interface';
import { LoaderType } from '../loader/loader-type.enum';


@Component({
  selector: 'component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent implements OnInit {

  public accordionItems: AccrodionItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.accordionItems.push({title:'Example 1', content: 'Content 1', isExpanded: false});
    this.accordionItems.push({title:'Example 2', content: 'Content 2', isExpanded: false});
    
  }
  public loaderType = LoaderType.Loading;
  
}
