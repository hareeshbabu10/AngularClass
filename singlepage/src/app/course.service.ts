import { Injectable } from '@angular/core';
import { course } from './course';

@Injectable()
export class CourseService {
  private courselist:course[];

  constructor() {
    this.courselist=[
      {
        name:"Angular",
        image:"angular.png",
        price:"10000",
        description:"Google Singlepage app framework."
      },
      {
        name:"css3",
        image:"css3.png",
        price:"11000",
        description:"css3."
      },
      {
        name:"Html5",
        image:"html5.png",
        price:"12000",
        description:"Html latest."
      },
      {
        name:"Asp",
        image:"asp.png",
        price:"13000",
        description:"Microsoft web devolopment."
      },
      {
        name:"Java",
        image:"java.png",
        price:"14000",
        description:"Open source by oracle."
      },
      {
        name:"Hadoop",
        image:"hadoop.png",
        price:"15000",
        description:"Hadoop eco systems."
      }
    ]
   }

  getCourses():course[]{
    return this.courselist;
  }
}
