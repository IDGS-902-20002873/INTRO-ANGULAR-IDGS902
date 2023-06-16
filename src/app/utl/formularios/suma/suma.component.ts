import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  suma:number=0;
  num1:string='';
  num2:string='';

  calcularSuma():void{
    this.suma = parseInt(this.num1) + parseInt(this.num2);
  }
}
