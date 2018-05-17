var _this = this;
var Student = /** @class */ (function () {
    function Student(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    return Student;
}());
(function () {
    console.log(_this.sno + "--------->" + _this.name);
});
Student;
obj = new Stundent(10, "asd");
obj.info();
