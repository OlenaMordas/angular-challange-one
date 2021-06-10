import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  @Input()
  public creditCardNumber='';

  private readonly =false;
  public get isReadonly(){
    return this.readonly
  }

  @Input()
  public set isReadonly(value: boolean){
    this.creditCardNumber = value ? this.formateReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber
    this.readonly = value;
  }
  
  private formateReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part,index)=>{
      if(index === parts.length-1) {
        return part;
      }
      return 'xxxx'
    });

    return onlyLast4Shown.join('-');
  }
}
