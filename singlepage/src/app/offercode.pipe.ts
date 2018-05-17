import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(dummy: any, price?: any): any {
    if(price>=15000)
      return "OFFER20 (20% discount)";
    else if(price>12000)
      return "OFFER12 (12% discount)";
    else if(price>10000)
      return "OFFER10 (10% discount)";
    return null;
  }

}
