[Inyección de dependencias](http://academia-binaria.com/angular2-di-inyeccion-de-dependencias/)

Comunicación entre componentes mediante Servicios Inyectables con datos Observables

### Guía
### Lo primero que vamos a hacer hoy es crear un servicio llamado "datos" dentro del módulo "movimientos". Para ello ejecutamos:
- `ng g s movimientos/datos` :  crea el servicio de datos, pero no lo enganca¡ha en el módulo
### Hay que tener cuidado con lo servicios al momento de crearlos, ya que se crean en el sitio que le indiquemos pero no se autorregistran dentro
### del módulo. Para poderlo usarlo habrá que registrarlo debidamente dentro del módulo.

- `movimientos.module.ts` : registro del servicio como un proveedor
- `nuevo.component.ts` : declara dependencia de DatosService y delega responsabilidad 
- `datos.model.ts` : modelos de datos coninterfaces y clases
- `datos.service.ts` : servicio para manejo de datos comunes y observables
- `lista.component.ts` : declara dependencia de DatosService y se suscribe a cambios 

(http://mean.expert/2016/05/21/angular-2-component-communication/)
