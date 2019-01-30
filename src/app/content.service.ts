import { Injectable } from '@angular/core';
import { articles } from './content/mock-contents';
import { Observable, of } from 'rxjs';
import { Article } from './content/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    return of (articles);
  }

}
