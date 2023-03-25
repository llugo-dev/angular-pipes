import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'luis carlos';
  nombreUpper: string = 'LUIS CARLOS';
  nombreCompleto: string = 'luIs caRloS';

  fecha: Date = new Date();

}
