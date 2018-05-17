interface Demo{
	info():void;
}
class Student implements Demo{
	private sno:number;
	private name:string;
	
	constructor(sno,name){
		this.sno=sno;
		this.name=name;
	}
	
	info:void(){
		console.log(this.sno+"--------->"+this.name);
	}
}

Student obj=new Stundent(10,"asd");
obj.info();