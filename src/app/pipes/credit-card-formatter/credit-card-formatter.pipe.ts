import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(cardNumber:string) :string {
    if(!this.hasCorrectLength(cardNumber)){
      return 'Invalid Card Length';
    }
    if(!this.isAllNumbers(cardNumber)){
      return 'Invalid Character';
    }
    return this.formatCardNumber(cardNumber);
  }

  private hasCorrectLength(cardNumber: string):boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverCardLength = 16;
    const isAmericanExpressLength = 15;

    if(cardNumberLength===isAmericanExpressLength ||
      cardNumberLength ===isMasterDiscoverCardLength){
        return true;
      }
    return false;
  }

  private isAllNumbers(cardNumber: string):boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidChars = cardNumber.split('').filter((char)=>stringNumbers.includes(char)).length;
    return totalValidChars === cardNumber.length; 
  }
  private formatCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts.join('-');
  }
}
