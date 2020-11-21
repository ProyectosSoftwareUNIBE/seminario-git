import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewModel} from '../model/new.model';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  static URL = 'item/:id';
  public id: string;
  public new: NewModel;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    this.newsService.getNewById(this.id).subscribe(
      data => this.new = data
    );
  }

}
