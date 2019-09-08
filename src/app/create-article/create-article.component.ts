import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, Article } from '../service/article.service';
import { TagService } from '../service/tag.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(private route:ActivatedRoute, public articleS:ArticleService, public tagS:TagService) { 
    this.articleS.currentArticle = {} as Article
    this.route.params.subscribe(
      param => {
        this.articleS.getCurrentArticle(param.id)
      }
    )
  }

  ngOnInit() {
  }

}
