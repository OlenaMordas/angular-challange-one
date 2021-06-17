import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  @Output() headerClick = new EventEmitter<{key: string, value: any }>();
  
  @Input() public tableData: any[] = [
    { first: 'Dylan 1', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 2', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 3', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 4', last: 'Israel', dob: '10/25/87' },
  ];

  onHeaderClick(key: string, value: any){
    this.headerClick.emit({key, value});
  }
}
