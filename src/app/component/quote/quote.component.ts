import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  @Input()
  public quoteText='';

  @Input()
  public authorName='';

  @Input()
  public authorPosition='';
}
