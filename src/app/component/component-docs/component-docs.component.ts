import { Component, OnInit, ViewChild } from '@angular/core';
import { AccrodionItem } from 'src/app/accordion-item.interface';
import { LoaderType } from '../loader/loader-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon-type.enum';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { SocialMediaIcon } from '../social-media-bar/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/socila-media.enum';
import { Tab } from '../tabs/tab.interface';


@Component({
  selector: 'component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent implements OnInit {

  public accordionItems: AccrodionItem[]=[];

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = {type: RibbonType.Info, location: RibbonLocation.TopLeft}

  public toggleButtons = ['bold', 'italic', 'underline'];


  @ViewChild(SnackBarComponent) public snackBar: SnackBarComponent;

  constructor() { }

  ngOnInit(): void {
    this.accordionItems.push({title:'Example 1', content: 'Content 1', isExpanded: false});
    this.accordionItems.push({title:'Example 2', content: 'Content 2', isExpanded: false});
    
  }
  public loaderType = LoaderType.Loading;

  loaded=false;
  debounceSearch(value){
    console.log(value);
  }

  public tabsArray:Tab[] = [
    {'title': 'Tab 1', 'isActive': true},
    {'title': 'Tab 2', 'isActive': false}
  ]
  selectedTab=0;

  onToggleButtonClick(button){
    console.log(`Clicked ${button}`);
  }

  public snackBarShow():void{
    this.snackBar.showMessage('Snackbar Example');
  }

  public socialMedia: SocialMediaIcon[] = [
    { href: 'https://www.facebook.com/groups/190277791450732', type: SocialMedia.Facebook },
    { href: 'https://www.instagram.com/dylansphotos87/', type: SocialMedia.Instagram },
    { href: 'https://www.linkedin.com/in/dylan310/', type: SocialMedia.LinkedIn },
    { href: 'https://twitter.com/PizzaPokerGuy', type: SocialMedia.Twitter },
    { href: 'https://www.YouTube.com/CodingTutorials360', type: SocialMedia.YouTube },
  ];
}