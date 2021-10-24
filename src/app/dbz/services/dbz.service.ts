import { Injectable } from '@angular/core';
import { Personaje } from '../intreface/dbz.interface';

@Injectable()
export class DbzService {
    private _Personajes: Personaje[] = [
        {
        nombre: 'Goku',
        poder: 75000
        },
        {
        nombre: 'Vegta',
        poder: 60000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._Personajes];
    }

    constructor() { }

    agregarPersonaje = (personaje: Personaje) => {
        this._Personajes.push(personaje);
    }
}
