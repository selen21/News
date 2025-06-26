import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('index')!;
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.article = data.articles[index];
    });
  }

  goBack() {
  window.history.back();
  }
}

