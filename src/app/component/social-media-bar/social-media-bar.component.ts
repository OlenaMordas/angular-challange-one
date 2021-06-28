import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaIcon } from './social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/socila-media.enum';

@Component({
  selector: 'social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent {

  @Input() public socialMedia: SocialMediaIcon[] = [];
  public SocialMedia = SocialMedia;
     
}
