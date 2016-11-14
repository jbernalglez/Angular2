// Este módulo lo hemos creado en inicio desde la consola con el comando angular-cli:
//
//  ng g m movimientos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Importa un componente que declara y que luego exporta */
import { MovimientosComponent } from './movimientos.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule
  ],// dependencias de otros módulos
  declarations: [
    MovimientosComponent,
    ListaComponent,
    NuevoComponent
  ],// Componente que el mismo declara
  exports: [
    MovimientosComponent
  ] // exporta los componentes importables desde otros módulos
})
export class MovimientosModule { }
