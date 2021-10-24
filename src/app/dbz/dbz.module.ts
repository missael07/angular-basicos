import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesListadoComponent } from './personajes-listado/personajes-listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ],
})
export class DbzModule { }
