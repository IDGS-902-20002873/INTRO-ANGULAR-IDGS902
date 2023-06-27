import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;

  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:902,
      nombre:'Pedro',
      edad:23,
      correo:'pedro@gmail.com',
      foto:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      calif:6.7
    },
    {
      matricula:903,
      nombre:'Paulina',
      edad:22,
      correo:'paulina@gmail.com',
      foto:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      calif:7.9
    },
    {
      matricula:904,
      nombre:'Juan',
      edad:28,
      correo:'juan@gmail.com',
      foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg',
      calif:5.3
    }
  ];

  onCalificaClick(mesagge:string){
    this.alumnoTitle=` ${mesagge}`;
  }
}
