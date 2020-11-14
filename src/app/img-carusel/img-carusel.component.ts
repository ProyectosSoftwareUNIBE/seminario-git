import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ImageModel } from '../model/image.model';
import { NameModel } from '../model/name.model';
@Component({
  selector: 'app-img-carusel',
  templateUrl: './img-carusel.component.html',
  styleUrls: ['./img-carusel.component.css']
})
export class ImgCaruselComponent implements OnInit {
  @Input()
  public images: ImageModel[];
  @Output()

  name: NameModel = { name: "child component", age: 80 };
  public buttonClicked: EventEmitter<NameModel> = new EventEmitter<NameModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickHelp() {
    this.buttonClicked.emit(this.name);
  }

}
