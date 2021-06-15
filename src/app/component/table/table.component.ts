import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  @Input() public tableData: any[] = [
    { first: 'Dylan 1', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 2', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 3', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 4', last: 'Israel', dob: '10/25/87' },
  ];

}
