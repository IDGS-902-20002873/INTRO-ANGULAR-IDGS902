import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {

  // Del padre al hijo
  @Input() califica!:number;

  // Output permite emitir eventos para detectar eventos-funciones del hijo al padre
  @Output() calificaClick:EventEmitter<string>=new EventEmitter();
  puntosCal!:number;
  ngOnChanges():void{
    this.puntosCal=this.califica*76/10;
  }
  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }
}
