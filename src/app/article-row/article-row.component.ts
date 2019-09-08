import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../service/article.service';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.css']
})
export class ArticleRowComponent implements OnInit {

  @Input() article:Article

  constructor() { }

  ngOnInit() {
  }

}
