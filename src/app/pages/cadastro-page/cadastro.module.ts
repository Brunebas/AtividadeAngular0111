import { NgModule } from '@angular/core';
import { CadastroPageComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CadastroPageComponent
  ]
  
})
export class CadastroModule { }