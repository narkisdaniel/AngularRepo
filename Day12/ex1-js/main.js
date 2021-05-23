function Calculator(a,b){
    this.a=a;
    this.b=b;
}

Calculator.prototype.add = function() {
    return (this.a+this.b);
}

Calculator.prototype.sub = function() {
    return (this.a-this.b);
}

Calculator.prototype.mul = function() {
    return (this.a*this.b);
}

Calculator.prototype.log = function() {
    console.log(this.add());
    console.log(this.sub());
    console.log(this.mul());

}

var c1=new Calculator(5,10);
c1.log();