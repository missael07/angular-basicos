import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes = ['spiderman', 'ironman', 'hulk'];
  heroeBorrado = '';

  borrarHeroe = () => {
    console.log('borrando....');
    this.heroeBorrado = this.heroes.shift();
  }
}
