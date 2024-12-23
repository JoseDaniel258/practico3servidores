import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

// se utiliza para que el componente gifs-card-list pueda recibir un arreglo de gifs y sea mas dinamico
  @Input() gifs: Gif[] = [];

}
