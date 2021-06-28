import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  public isShown = false;

  public show():void {
    this.isShown = true;
  }

  public hide() : void {
    this.isShown = false;
  }
}
