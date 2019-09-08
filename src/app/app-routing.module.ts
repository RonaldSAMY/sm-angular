import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {path:'',component:ArticlesListComponent},
  {path:'article/:id', component: ArticleComponent},
  {path:'update/:id', component: CreateArticleComponent},
  {path:'newarticle', component: CreateArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
