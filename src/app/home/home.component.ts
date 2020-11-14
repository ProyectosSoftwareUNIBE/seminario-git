import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ImageModel } from '../model/image.model';
import { NameModel } from '../model/name.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: ImageModel[];
  public valueEmittedFromChildComponent: NameModel = { name: null, age: null };

  constructor() {
  }

 

  ngOnInit(): void {
    this.images = [
      { src: '/assets/descarga.jpg', alt: 'img1' },
      { src: '/assets/descarga2.jpg', alt: 'img2' }
    ];
  }
  parentEventHandlerFunction(valueEmmited) {
    this.valueEmittedFromChildComponent = valueEmmited;

  }

}
