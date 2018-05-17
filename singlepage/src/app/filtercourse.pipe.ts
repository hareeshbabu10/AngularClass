import { Pipe, PipeTransform } from '@angular/core';
import { course } from './course'

@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricerange: string): course[] {
    let temp:course[]=[];
    if(pricerange=="High Price"){
      for(let x in courses){
        if(parseInt(courses[x].price)>=15000)
        temp.push(courses[x]);
      }
    }
    else if(pricerange=="Moderate Price"){
      for(let x in courses){
        if((parseInt(courses[x].price)>=13000)&&(parseInt(courses[x].price)<15000))
        temp.push(courses[x]);
      }
    }
    else if(pricerange=="Normal Price"){
      for(let x in courses){
        if((parseInt(courses[x].price)>=12000)&&(parseInt(courses[x].price)<13000))
        temp.push(courses[x]);
      }
    }
    else
    temp=courses;

    return temp;
  }

}
