import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  standalone: false,

  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {



  @Input()
  // asegura a tupescrip que siempre  va ver algo en la propiedad gif
  public gif!: Gif;

  ngOnInit(): void {
    // es un evento ni bien se inicia el componente
    if (!this.gif) throw new Error('Gifs is property is required');
  }
}
