import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../animations/fade-in-out-animation';

@Component({
  selector: 'misc-docs',
  templateUrl: './misc-docs.component.html',
  styleUrls: ['./misc-docs.component.scss'],
  animations: [fadeInOutAnimation]
})
export class MiscDocsComponent {

  public isInDOM = true;

}
