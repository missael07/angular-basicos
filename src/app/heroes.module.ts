import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListadoComponent
    ],
    providers: [],
})
export class HeroesModule {

}
