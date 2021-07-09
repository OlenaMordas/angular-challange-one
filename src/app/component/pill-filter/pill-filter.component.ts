import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PillTypes } from '../pill/pill-type.enum';

@Component({
  selector: 'pill-filter',
  templateUrl: './pill-filter.component.html',
  styleUrls: ['./pill-filter.component.scss']
})
export class PillFilterComponent implements OnInit {

  @Input()
  options: string[]=[];

  @Output()
  onSelection = new EventEmitter<{wasSelected:boolean,label:string}>();
  selected: string[];
  deselected : string[];

  pillTypes = PillTypes;

  ngOnInit(): void {
    this.deselected = this.options;
    this.selected = [];
  }

  selectClick(pill){
    let label:string = pill.label;
    if (this.selected.indexOf(label)!=-1){
      this.selected.splice(this.selected.indexOf(label),1);
      this.deselected.push(label);
      this.onSelection.emit({wasSelected: false, label: label})
    }
    else{
      this.deselected.splice(this.deselected.indexOf(label),1)
      this.selected.push(label);
      this.onSelection.emit({wasSelected: true, label: label})
    }
  }
}
