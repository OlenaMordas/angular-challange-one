import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent{

  @Input()
  totalNumberOfItems=1;

  @Input()
  itemsPerPage=10;

  @Output()
  pageClick = new EventEmitter<number>();

  currentPage=1;
  totalPages=1;

  isPrevDisabled=true; 
  isNextDisabled=false;
  
  public get pages():number[] {
    this.totalPages = Math.ceil(this.totalNumberOfItems/this.itemsPerPage);

    const result = [];

    if (this.currentPage > 1) {
      result.push(this.currentPage - 1);
    }

    result.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      result.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      result.push(this.currentPage + 2);
    }

    if (this.currentPage + 2 < this.totalPages && this.currentPage === 1) {
      result.push(this.currentPage + 3);
    }

    return result;
  }

  setPage(page){
    if(page!=this.currentPage){
      this.currentPage = page;
      this.isNextDisabled = this.currentPage==this.totalPages;
      this.isPrevDisabled = this.currentPage==1;
      this.pageClick.emit(page);
    } 
  }


}
