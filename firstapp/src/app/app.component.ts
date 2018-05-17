import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 App';
  technologies:String[]=['Java','Angular','React','Python'];
  headings:string[]=["Animals","Stationaries","Electronic Items"];
  childdata:string[][]=[
    ["Lion","tiger","Elephant","Dog"],
    ["Pen","Paper","Book","pencil"],
    ["Mobile","pendrive","Hard disk"]
  ];

  recieveItem(data,childCount){
    this.childdata[childCount].push(data);
  }

}
