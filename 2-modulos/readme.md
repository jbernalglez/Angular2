[Módulos y Componentes](http://academia-binaria.com/componentes-los-bloques-de-construccion-de-angular-2/)

Módulos de funcionalidad con Angular 2

### Guía
# Las aplicaciones en Angular 2 son modulares y por tanto crearemos tantos módulos como necesitemos.
# Lo primero que hacemos es crear el módulo "movimientos".
- `ng g m movimientos` : crea el módulo movimientos en su carpeta y con un componente

# Esto nos crea la carpeta "movimientos"
- `movimientos` : carpeta para el módulo movimientos

# Que contiene 4 ficheros importantes:
- `movimientos.module.ts` : Declara un módulo de funcionalidad y registra un componente (que hay que exportarlo manualmente)
- `movimientos.component.ts` : Declara el componente principal del módulo, con el prefijo app
- `movimientos.component.html` : Describe la vista del componente movimientos
- `movimientos.component.css` : Define la hoja de estilos para este componente.

# Dado que vamos a querer utilizar el componente movimientos dentro del componente principal va a ser necesario
# importarlo dentro del módulo principal,
- `app.module.ts` : Aquí importamos el módulo de movimientos

# y llamarlo desde la plantilla del componente principal.
- `app.component.html` : incorporamos al componente movimientos

# A continuación crearemos dos nuevos componentes que serán hijos del componente "movimientos".
# Estos dos componentes, al crearse de este modo, se autodeclaran en las declaraciones del módulo "movimientos"
# (`movimientos.module.ts`), pero no se exportan automáticamente. Esto tendremos que hacerlo nosotros manualmente
# si queremos que puedan utilizarse fuera del módulo "movimientos".
#
- `ng g c movimientos/nuevo` : Crea una carpeta con el componente nuevo dentro del modulo movimientos
- `movimientos.component.html` : Incorporamos el componente nuevo como un elemento de la plantilla del componente movimientos
- `ng g c movimientos/lista` : Hacemos lo mismo para el componente lista.