import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '04-pipes';

  constructor(private primeNGConfig: PrimeNGConfig) {

  }
  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  nombre: string = 'luis lugo';
  numero: number = 1000;
  obj = {
    nombre: 'Luis',
    apellido: 'Lugo'
  };

  mostrarDatos(): void {
    console.log(this.nombre);
    console.log(this.numero);
  }
}
