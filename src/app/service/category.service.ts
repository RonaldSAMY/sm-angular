import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  public allCategorys:Array<Category> = []
  
  constructor(private httpS:HttpService) {
    this.httpS.getAllCategorys().subscribe(
      (res:Array<Category>)=>{
        this.allCategorys = res
      },(err)=>{

      }
    )
  }
}

interface Category {
  id:number,
  name:string
}