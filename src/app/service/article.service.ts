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

  public currentArticle:Article = {
    category:0,
    content:"",
    id:0,
    tags:[],
    title:''
  }

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

  resetArticle() {
    console.log('reset happend')
    this.currentArticle = {
      category:0,
      content:"",
      id:0,
      tags:[],
      title:''
    }
  }

}


export interface Article{
  id:number,
  title:string,
  content:string,
  category:number,
  tags:Array<any>
}

interface Category {
  id:number,
  name:string
}