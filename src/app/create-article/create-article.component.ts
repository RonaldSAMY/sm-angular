import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { TagService, Tag } from '../service/tag.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  public selectedTags:Array<any> = []

  public selectedTag:number = 0;

  public update:boolean = false

  constructor(private route:ActivatedRoute, public articleS:ArticleService, public tagS:TagService,public categoryS:CategoryService) { 
    this.articleS.resetArticle()
    this.update = false;
    this.route.params.subscribe(
      param => {
        if(param.id == undefined) {
          return
        }
        this.update = true;
        this.articleS.getCurrentArticle(param.id)
      }
    )
  }

  ngOnInit() {

  }

  tagSelected() {
    this.articleS.currentArticle.tags.push(this.tagS.allTags[this.selectedTag])
    this.selectedTag = 0
  }

  createArticle() {
    
    let newArticle = Object.assign({},this.articleS.currentArticle)
    delete newArticle.id
    newArticle.tags = []
    this.articleS.currentArticle.tags.map(
      (tag:Tag)=>{
        newArticle.tags.push(tag.id)
      }
    )
    this.articleS.createArticle(newArticle)
  }

  updateArticle() {
    
  }

}
