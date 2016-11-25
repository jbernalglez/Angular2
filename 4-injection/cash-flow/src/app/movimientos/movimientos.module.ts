import { uno } from './../../../../../clase/escuelait/src/app/constantes';
// Importar el servicio DatosService desde el fichero
// Se registrará como un provider 
// Podrá ser inyectado en los componentes de este módulo
import { DatosService } from './datos.service';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Importa un componente que declara y que luego exporta */
import { MovimientosComponent } from './movimientos.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule ],// dependencias de otros módulos
  declarations: [
    MovimientosComponent,
    ListaComponent,
    NuevoComponent ],// Componente que el mismo declara
  exports: [
    MovimientosComponent
  ], // exporta los componentes importables desde otros módulos

  // Providers se utiliza para registrar en el módulo los servicios que creemos. Hay que recordar que al crear un servicio, éste se crea pero uno
  // se autorregistra en el módulo.
  //
  // Al registrar un servicio dentro de un módulo, podrá usarse en cualquier componente del módulo. (Ver fichero "nuevo.component.ts")
  providers: [
    DatosService
  ] // registro del servicio como un proveedor del módulo
  
})
export class MovimientosModule { }
