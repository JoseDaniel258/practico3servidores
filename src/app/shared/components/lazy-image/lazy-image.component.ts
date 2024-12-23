import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,

  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

 ngOnInit(): void {

 }
@Input()
 public url!: string;
@Input()
public alt: string='';

}
