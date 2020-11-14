import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  static URL = 'list';
  public items: ItemModel[];

  constructor(private rout: Router) {
    this.items =
      [
        {id: 1, name: 'primero', photo: '/assets/descarga.jpg', description: null},
        {id: 2, name: 'segundo', photo: '/assets/descarga2.jpg', description: null},
        {id: 3, name: 'tercero', photo: '/assets/descarga.jpg', description: null}
      ];
  }

  ngOnInit(): void {
  }

  navigateToItem(item: ItemModel): void {
    this.rout.navigate(['/item/' + item.id]);
  }

}
