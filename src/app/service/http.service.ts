import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpC:HttpClient) { }

  /**
   * To get all articles
   */
  public getAllArticles() {
    return this.httpC.get(environment.api+'/articles')
  }

  /**
   * To get current article by id
   * @param id 
   */
  public getArticleById(id:number) {
    return this.httpC.get(environment.api+'/article/'+id)
  }

  /**
   * To get all tags
   */
  public getTags() {
    return this.httpC.get(environment.api+'/tags')
  }

  
}
