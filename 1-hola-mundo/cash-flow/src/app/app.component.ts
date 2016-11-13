// Importar antes de usar
import { Component } from '@angular/core';

// Los componentes también cuentan con un OBJETO DECORADOR que lo define.
//
// Los decoradores de componentes tienen las siguientes propiedades:
//  -- selector:    Selector para ser consumido como elemento html.
//  -- templateUrl: Ruta a la plantilla.
//  -- styleUrls:   Estilos que aplica, en css o sass.
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Los componentes son clases instanciables
export class AppComponent {
  // propiedades para enlazar con la plantilla
  title = 'app works!';
}
