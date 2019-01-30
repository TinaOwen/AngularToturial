import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Article } from './content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articles: Article[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    this.contentService.getArticles().subscribe(contents=>this.articles = contents);
  }

}
