import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input()
  public baseHref = 'https://www.DylanIsrael.com';
  @Input()
  public hashTags: string[] =['Angular', 'TypeScript', 'JavaScript'];

  constructor (public titleService: Title){}

  public get twitterUrl() :string{
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a COding God!`)
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashtags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtags)}&related=pizzapokerguy&url=${route}&text=`;
  }
}


