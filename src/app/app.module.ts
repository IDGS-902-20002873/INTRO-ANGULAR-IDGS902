import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoGrupo } from './utl/grupos.component';
import { NuevoAlumno } from './utl/alumnos.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaModule } from './utl/distancia/distancia-modulo/distancia.module';

@NgModule({
  declarations: [
    AppComponent,
    NuevoGrupo,
    NuevoAlumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
