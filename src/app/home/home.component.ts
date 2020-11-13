import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {ImageModel} from '../model/image.model';
import {NameModel} from '../model/name.model';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public images: ImageModel[];
  @ViewChild(MenuComponent, {static: false}) menu;
  public name: NameModel;

  constructor(private cdRef: ChangeDetectorRef) {
    this.name = {name: '', age: 0};
  }

  ngAfterViewInit(): void {
    this.name = this.menu.name;
    console.log(this.name);
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.images = [
      {src: '/assets/descarga.jpg', alt: 'img1'},
      {src: '/assets/descarga2.jpg', alt: 'img2'}
    ];
  }

}
