import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Input()
  public searchString ='';
  @Input()
  public availableItems=[];
  public hasBeenSelected = false;


  ngOnInit(): void {
  }

  onSearchUpdate(value: string): void{
    this.searchString = value;
    this.hasBeenSelected = false;
  }

  selectTerm(item:string){
    this.searchString = item;
    this.hasBeenSelected = true;
  }
}
