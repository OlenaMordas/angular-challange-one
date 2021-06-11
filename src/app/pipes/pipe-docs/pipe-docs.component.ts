import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-docs',
  templateUrl: './pipe-docs.component.html',
  styleUrls: ['./pipe-docs.component.scss']
})
export class PipeDocsComponent {

  public flattenValue = [1,[1,2],3];

  modifyFlattenValue(){
    return this.flattenValue.push(2,5);
  }
  reassignFlattenValue(){
    return this.flattenValue;
  }

}
