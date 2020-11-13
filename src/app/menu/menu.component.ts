import {Component, OnInit} from '@angular/core';
import {NameModel} from '../model/name.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public name: NameModel;
  message = 'hola';

  constructor() {
    this.name = {name: 'hola mundo', age: 1};
  }

  ngOnInit(): void {

  }

}
