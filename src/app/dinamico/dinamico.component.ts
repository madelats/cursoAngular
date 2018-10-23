import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { LoggerService } from 'src/indra-core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [CalculadoraComponent, HomeComponent, DemosComponent],
})
export class DinamicoComponent implements OnInit {

  menu = [
    { texto: 'Calculadora', componente: CalculadoraComponent},
    { texto: 'Inicio', componente: HomeComponent},
    { texto: 'Demos', componente: DemosComponent},
  ];

  seleccionado = this.menu[0].componente;

  constructor(private out: LoggerService) { }

  ngOnInit() {
  }

  seleccionar(index: number) {
    if (0 <= index && index <= this.menu.length) {
      this.seleccionado = this.menu[index].componente;
    } else {
      this.out.error('Index out of range.');
    }
  }

}
