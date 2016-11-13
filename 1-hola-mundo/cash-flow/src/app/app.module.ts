// Aquí se importan objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Aquí se realiza la importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';

// Aquí se describe el OBJETO DECORADOR que define el módulo.
// Un módulo es una "caja" que recibe unas "importaciones", se fabrican "cosas" y se exportan "otras".
// En el módulo raíz, las exportaciones van en una propiedad especial denominada "bootstrap".
//
// Posee hasta 5 propiedades:
//  -- declarations:  Donde se colocan todas las declaraciones que se han creado en este módulo. (Lo que construimos)
//  -- imports:       Donde se importan otros módulos que necesitaremos para que este funcione.
//  -- providers:     Inyección de servicios comunes para la aplicación.
//  -- bootstrap:     Define el componente raíz para el arranque del módulo. Sólo existe esta propiedad en el módulo raíz.
//  -- exports:       Donde se colocan los componentes que exportamos. No existe esta propiedad en el módulo raíz.  
//
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})

// Los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
