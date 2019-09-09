import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route:ActivatedRoute, public articleS:ArticleService) { 
    this.route.params.subscribe(
      param => {
        
        this.articleS.getCurrentArticle(param.id)
      }
    )
  }

  ngOnInit() {
  }


}
