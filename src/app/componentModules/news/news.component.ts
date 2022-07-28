import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // news:News = new News();
  // news:any;
  news: News[] = [];

  constructor(private service:NewsService) { }

  ngOnInit(): void {

    this.service.getAll().subscribe(x => {
      this.news = x;
    });

    this.helloNews();
  }

  helloNews(){
    alert('Hello News');
  }

}
