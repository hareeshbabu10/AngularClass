import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('title' )info:String;
  unit:String="unit1";
  @Input('items') items:string[];
  @Output ('send') emitData:EventEmitter<String>=new EventEmitter<string>();
  current:string;
  constructor() { }

  ngOnInit() {

  }
  changeColor(){
    if(this.unit=="unit1")
    this.unit="unit2";
    else
    this.unit="unit1";
  }

  ngDoCheck(){
    console.log("instance members changed : "+this.info)
  }

  ngOnChanges(){
    console.log("input members changed : "+this.info)
  }

  addItem(){
    this.emitData.emit(this.current);
  }

}
