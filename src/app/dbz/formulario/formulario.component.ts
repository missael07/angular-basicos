import { Component, Input } from '@angular/core';
import { Personaje } from '../intreface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService) { }

  agregar = () => {
    if (this.nuevo.nombre.trim().length > 0) {
      // this.onNuevoPersonaje.emit( this.nuevo );
      this.dbzService.agregarPersonaje( this.nuevo );
      this.nuevo = { nombre: '', poder: 0 };
    }
  }
}
