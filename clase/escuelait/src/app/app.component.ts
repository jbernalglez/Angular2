import { Component, Injectable, Input } from '@angular/core';
import { PI , uno} from './constantes'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Una clase 'componente' expone a la 'vista' todas sus propiedades y métodos.
//
export class AppComponent {
  // Las propiedades son evaluables directamente desde la 'vista'
  //
  public mostrar: boolean = false;
  private pi: number = PI;
  public radio: number = uno;
  public circunferencia: number = 2 * this.pi * this.radio;
  public title = 'app works!';
  public nombre: string = "Alberto";
  public empresa: string = 'EscuelaIT';

  calcularCircunferencia = function (valorEvento:number) {
    this.radio = valorEvento;
    this.circunferencia = 2 * this.pi * this.radio;
  }
}



/*
angular.module('app').component('root',{
  templateUrl: './app.component.html,
  controller : function(){
    this.title = 'app works!';
  }
})
*/