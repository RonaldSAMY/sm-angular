import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Tag } from './tag.service';

@Injectable({
  providedIn: 'root'
})
/**
 * class ArticleService
 */
export class ArticleService {

  public allArticles:Array<Article> = []

  public currentArticle:Article = {} as Article

  /**
   * 
   * @param httpS HttpService
   */
  constructor(private httpS:HttpService) {
    this.httpS.getAllArticles().subscribe(
      (res:Array<Article>)=>{
        this.allArticles = res
      },(err)=>{

      }
    )
  }

  /**
   * 
   * @param id 
   */
  public getCurrentArticle(id:number) {
    this.httpS.getArticleById(id).subscribe(
      (res:Article)=>{
        this.currentArticle = res
      },(err)=>{

      }
    )
  }


}


export interface Article{
  id:number,
  title:string,
  content:string,
  category:Category,
  tags:Array<Tag>
}

interface Category {
  id:number,
  name:string
}