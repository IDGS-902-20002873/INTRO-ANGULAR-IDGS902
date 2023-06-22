import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule
  ],
  exports:[
    OperasBasComponent
  ]
})
export class OperasModule { }