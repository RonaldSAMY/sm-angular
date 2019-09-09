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
      (res:any)=>{
        let curArt = Object.assign({},res)
        this.currentArticle = res
        this.currentArticle.category = curArt.category.id
      },(err)=>{

      }
    )
  }

  public createArticle(article) {
    this.httpS.createArticle(article).subscribe(
      (res:Article)=>{
        this.currentArticle = res
      },(err)=>{

      }
    )
  }

  resetArticle() {
    this.currentArticle = {
      category:0,
      content:"",
      id:0,
      tags:[],
      title:'',
      image:'test.jpg'
    }
  }

}


export interface Article{
  id:number,
  title:string,
  content:string,
  category:number,
  image:string,
  tags:Array<any>
}