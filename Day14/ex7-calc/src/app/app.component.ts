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
    results: string[]=[];
    isBusy:boolean=false;
 
    //methods
    setFirstNumber(value: number):void {
        this.firstNumber = value;
    }
    setSecondNumber(value: number):void {
        this.secondNumber = value;
    }
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
        this.isBusy=true;
        setTimeout(() => {
            this.isBusy = false;
            this.results = [
                `${this.firstNumber} + ${this.secondNumber} = ${this.add()}`,
                `${this.firstNumber} - ${this.secondNumber} = ${this.subtract()}`,
                `${this.firstNumber} * ${this.secondNumber} = ${this.multiply()}`,
            ];
        } , 2000);

    }

}
