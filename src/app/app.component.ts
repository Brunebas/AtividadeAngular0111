import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro';

}
/*let nome = document.getElementById('nome');
let labelNome = document.querySelector('#labelNome');

let email = document.getElementById('email');
let labelEmail = document.querySelector('#labelEmail');

let senha = document.getElementById('senha');
let labelSenha = document.querySelector('#labelSenha');

let estado = document.getElementById('estado');
let labelEstado = document.querySelector('#labelEstado');

let cidade = document.getElementById('cidade');
let labelCidade = document.querySelector('#labelCidade');

let bairro = document.getElementById('bairro');
let labelBairro = document.querySelector('#labelBairro');

let genero = document.getElementById('genero');
let labelGenero = document.querySelector('#labelGenero');

function cadastrar(){
    alert('Pessoa cadastrada com sucesso!')
    let listaP = JSON.parse(localStorage.getItem('listaP') || '[]')
    
    listaP.push(
    {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
      estado: estado.value,
      cidade: cidade.value,
      bairro: bairro.value,
      genero: genero.value,
    }
    )
    
    localStorage.setItem('listaP', JSON.stringify(listaP))
  }*/
