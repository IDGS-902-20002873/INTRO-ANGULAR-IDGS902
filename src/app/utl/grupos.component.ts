import { Component } from "@angular/core";

@Component({
    selector:'app-groups', 
    template:`
    <h1>Hola Grupos UTL</h1>
    <label>Numero:</label>
    <form>
        <input type="text" name="x" value="">
        <button class="btn btn-primary">Calcular</button>
    </form>
    `
})
export class NuevoGrupo{
    constructor (){}
}