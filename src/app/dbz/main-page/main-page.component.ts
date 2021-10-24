import { Component } from '@angular/core';

import { Personaje } from '../intreface/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 15000
  };

  constructor() {}
}
