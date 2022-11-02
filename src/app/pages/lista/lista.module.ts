import { NgModule } from '@angular/core';
import { ListaPageComponent } from './lista.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ListaPageComponent
  ]
  
})
export class ListaModule { }