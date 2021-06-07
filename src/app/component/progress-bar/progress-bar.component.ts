import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() 
  public title='';
  @Input()
  public subTitle='';

  @Input()
  public start=0;

  @Input()
  public stop=100;
  
  onClick(progress){
    progress.value=75;
  }
}
