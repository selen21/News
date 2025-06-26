import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {}
  
  ngOnInit(): void {
    this.article = this.newsService.selectedArticle;

    if (!this.article) {
      // Eğer direkt detay sayfasına URL ile girildiyse (selectedArticle boşsa)
      // Burada fallback olarak başka işlem yapabilir veya hata gösterebilirsin
      // Örneğin anasayfaya yönlendirme:
      this.router.navigate(['/']);
    }
  }
  /*ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('index')!;
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.article = data.articles[index];
    });
  }*/

  goBack() {
    window.history.back();
  }
}




/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/news.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    const encodedUrl = this.route.snapshot.paramMap.get('encodedUrl');
    if (encodedUrl) {
      const url = decodeURIComponent(encodedUrl);
      this.newsService.getArticleByUrl(url).subscribe(article => {
        this.article = article;
      });
    }
  }

  goBack() {
    window.history.back();
  }
}*/



/*import { Component, OnInit } from '@angular/core';
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
}*/


