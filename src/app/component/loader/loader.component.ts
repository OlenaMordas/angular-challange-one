import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  ngOnInit(): void {
    if(this.loaderType === LoaderType.Loading){
      this.updateLoaderPeriods();
    }
  }
  updateLoaderPeriods() {
   let currentStep=0;

   setInterval(()=>{
     switch(currentStep%3){
       case 0: 
        this.loadingPeriods='..\0';
        currentStep+=1;
        break;
      case 1: 
        this.loadingPeriods='...';
        currentStep+=1;
        break;
      case 2: 
        this.loadingPeriods='.\0\0';
        currentStep=0;
        break;
     }
   },500);
  }

  @Input() 
  public isLoading=false;

  @Input()
  public loaderType: LoaderType = LoaderType.Circular; 

  public LoaderType = LoaderType;

  public get loadingText():string{
    return `${this.loading}${this.loadingPeriods}`;

  }

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';
}
