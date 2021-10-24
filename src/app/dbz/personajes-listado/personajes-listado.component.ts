import { Component, Input } from '@angular/core';
import { Personaje } from '../intreface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes-listado',
  templateUrl: './personajes-listado.component.html'
})
export class PersonajesListadoComponent {

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {}
}
