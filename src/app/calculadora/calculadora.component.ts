import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: number;
  operacion = '';
  cadena = '';
  private num1: number;
  private num2: number;

  constructor() { }

  ngOnInit() {
  }

  addNumber(n: number) {
    if (!this.num1) {
      this.num1 = n;
    } else if (this.operacion === '') {
        this.num1 = this.num1 * 10 + n;
      } else if (!this.num2) {
        this.num2 = n;
      } else {
        this.num2 = this.num2 * 10 + n;
      }
    this.cadena = this.cadena + n;
  }

  addOperation(s: string) {
    if (this.num1 || this.num1 === 0) {
      if (s === '=' && (this.num2 || this.num2 === 0)) {
          switch (this.operacion) {
            case '+':
              this.resultado = this.num1 + this.num2;
              break;
            case '-':
              this.resultado = this.num1 - this.num2;
              break;
            case '*':
              this.resultado = this.num1 * this.num2;
              break;
            case '/':
              this.resultado = this.num1 / this.num2;
              break;
            default:
              break;
          }
        this.num1 = this.resultado;
        this.num2 = null;
        this.cadena = this.num1 + '';
        this.operacion = '';
      } else {
        this.cadena = this.cadena + s;
        this.operacion = s;
      }
    }
  }

}
