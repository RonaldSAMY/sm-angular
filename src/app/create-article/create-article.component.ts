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

  public selectedTags:Array<any> = []

  public selectedTag = 0

  constructor(private route:ActivatedRoute, public articleS:ArticleService, public tagS:TagService) { 
    this.articleS.resetArticle()
    this.route.params.subscribe(
      param => {
        this.articleS.getCurrentArticle(param.id)
      }
    )
  }

  ngOnInit() {

  }

  tagSelected() {
    this.selectedTags.push(this.selectedTag)
    this.selectedTag = 0
  }

}
