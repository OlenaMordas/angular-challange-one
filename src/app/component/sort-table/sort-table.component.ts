import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent {

  public tableData: any[] = [
    { first: 'Dylan 1', last: 'Israel', dob: '10/25/87', living: true, age: 25 },
    { first: 'Dylan 2', last: 'Israel', dob: '10/26/96', living: false, age: 70 },
    { first: 'Dylan 3', last: 'Israel', dob: '10/05/87', living: true, age: 32 },
    { first: 'Dylan 4', last: 'Israel', dob: '10/30/87', living: false, age: 43 },
  ];

  private propComparator = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

  sort(header){
    this.tableData.sort(this.propComparator(header));
  }
}
