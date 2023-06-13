import { Component } from "@angular/core";

@Component({
    selector:'app-alumno',
    template:`
    <form action="">
        <h1>Alumno:</h1>
        <h3>Roberto Carlos</h3>
    </form>
    `
})
export class NuevoAlumno{
    constructor (){}
    alumno = {
        matricula: 1234,
        nombre: 'Mario',
        apaterno: 'Lopez',
        Inscrito: 2745.9,
        fechaNacimiento: new Date()
      };
}
