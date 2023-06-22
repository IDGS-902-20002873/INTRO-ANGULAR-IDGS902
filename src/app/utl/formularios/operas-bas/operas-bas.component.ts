import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})

export class OperasBasComponent {
  n1!: number;
  n2!: number;
  resultado!: number;
  operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division'
  ];

  calcular() {
    switch (this.operacionSeleccionada) {
      case 'suma': this.resultado = this.n1 + this.n2;
        break;
      case 'resta': this.resultado = this.n1 - this.n2;
        break;
      case 'multiplicacion': this.resultado = this.n1 * this.n2;
        break;
      case 'division': this.resultado = this.n1 / this.n2;
        break;
    }

  }
}