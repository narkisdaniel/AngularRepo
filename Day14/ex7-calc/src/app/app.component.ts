import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title='ex7-calc';
    //data
    firstNumber:number = 0;
    secondNumber:number = 0;
    sum: number | null= null;
    difference: number | null = null;
    product: number | null = null;

    get hasResults(): boolean {
        return (this.sum !== null) &&
        (this.difference !== null) &&
        (this.product !== null);
    }


    //methods
    reset():void{
        this.difference=null;
        this.sum=null;
        this.product=null;
    }

    setFirstNumber(value: string):void {
        this.firstNumber = Number(value);
        this.reset();
    }
    setSecondNumber(value: string):void {
        this.secondNumber = Number(value);
        this.reset();    }
    add(): number {
        return this.firstNumber + this.secondNumber;
    }

    subtract(): number {
        return this.firstNumber - this.secondNumber;
    }

    multiply(): number {
        return this.firstNumber * this.secondNumber;
    }

    calculate(): void {
        if ((this.firstNumber === null) || (this.secondNumber === null)) {
            this.reset();
        }else{
            this.sum=this.add();
            this.difference=this.subtract();
            this.product=this.multiply();
        }
    }

}
