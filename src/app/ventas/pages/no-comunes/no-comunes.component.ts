import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Luis';
  genero: string = 'masculino';
  generoEstado: boolean = false;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Luis', 'Adriana', 'Fernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=3': 'tenemos 3 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  cambiarPersona(): void {
    this.genero = (this.generoEstado) ? 'masculino' : 'femenino';
    this.nombre = (this.generoEstado) ? 'Luis' : 'Luisa';
    this.generoEstado = !this.generoEstado;
  }

  borrarCliente(): void {
    if (this.clientes.length > 0) {
      this.clientes.shift();
    }
    return;
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Luis',
    edad: 39,
    direccion: 'Provo, UT'
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  //Async Pipe
  miObservable = interval(1000);

  miPromesa = new Promise(resolve => { 
    setTimeout(() => { 
      resolve('Tenemos data de promesa');
    }, 3000);
  });

}
