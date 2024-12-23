import { GifsService } from '../../services/gifs.service';
import { GifsModule } from './../../gifs.module';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-searh-box',
  standalone:false,
  template: `

  <h5>buscar</h5>

   <input type="text"
   class="form-control"
   placeholder="buscar..."

   (keyup.enter)="searchTag()"
   #txtTagInput
   >

  `
})

export class SearchBoxComponent {
  // el view child sirve para manipular directamente un elemento html
@ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>


constructor( private gifsService:GifsService){}


searchTag(){
   const newTag=this.tagInput.nativeElement.value;
this.gifsService.searchTag(newTag);
this.tagInput.nativeElement.value='';
 }

}
