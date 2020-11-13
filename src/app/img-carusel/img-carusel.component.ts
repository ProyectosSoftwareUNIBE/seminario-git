import {Component, OnInit, Input} from '@angular/core';
import {ImageModel} from '../model/image.model';

@Component({
  selector: 'app-img-carusel',
  templateUrl: './img-carusel.component.html',
  styleUrls: ['./img-carusel.component.css']
})
export class ImgCaruselComponent implements OnInit {
  @Input() images: ImageModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
