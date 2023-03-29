import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    if (orderPor === 'nombre') {
      return heroes.sort((a, b) => { 
        if (a.nombre > b.nombre) return 1;
        if (a.nombre < b.nombre) return -1;
        return 0;
      });
    }

    if (orderPor === 'color') {
      return heroes.sort((a, b) => { 
        return a.color - b.color;
      });
    }

    if (orderPor === 'vuela') {
      return heroes.sort((a, b) => { 
        return (a.vuela > b.vuela) ? -1 : 1;
      });
    }

    return heroes;
    
  }

}
