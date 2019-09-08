import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  public allTags:Array<Tag> = []

  constructor(private httpS:HttpService) {
    this.httpS.getTags() .subscribe(
      (res:Array<Tag>)=>{
        this.allTags = res
      },(err)=>{

      }
    )
  }
  
}

export interface Tag{
  id:number,
  name:string
}