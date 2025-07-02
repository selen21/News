import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: any;
  recommendedArticles: any[] = [];
  currentDate: string = '';
  currentTime: string = '';

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Öncelikle servis üzerinden seçilmiş haberi al
    this.article = this.newsService.selectedArticle;

    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.recommendedArticles = data.articles
        .filter((item: any) => item.url !== this.article?.url) // kendisini çıkar
        .slice(0, 10); // ilk 10 taneyi al
      });

    if (this.article) {
      // Eğer servis üzerinden haber varsa direkt göster
      return;
    }

    // Eğer servis üzerinden haber yoksa, URL parametresinden dene
    const encodedUrl = this.route.snapshot.paramMap.get('encodedUrl');

    if (encodedUrl) {
      const url = decodeURIComponent(encodedUrl);

      // Arama sorgusu varsa ona göre ara, yoksa genel başlıkları getir
      const query = this.newsService.lastSearchQuery || '';

      this.newsService.searchArticles(query).subscribe((data: any) => {
        const matched = data.articles.find((a: any) => a.url === url);
        if (matched) {
          this.article = matched;
        } else {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }
  startClock() {
    setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      };

      this.currentDate = now.toLocaleDateString('tr-TR', options);
      this.currentTime = now.toLocaleTimeString('tr-TR');
    }, 1000);
  }
  /*ngOnInit(): void {
    const encodedUrl = this.route.snapshot.paramMap.get('encodedUrl');

    if (encodedUrl) {
      const url = decodeURIComponent(encodedUrl);

      this.newsService
        .searchArticles(this.newsService.lastSearchQuery || '')
        .subscribe((data: any) => {
          const matched = data.articles.find((a: any) => a.url === url);
          if (matched) {
            this.article = matched;
          } else {
            // Haber bulunamazsa anasayfaya yönlendir
            this.router.navigate(['/']);
          }
        });
    } else {
      // URL parametresi yoksa anasayfaya yönlendir
      this.router.navigate(['/']);
    }
  }*/

  goBack() {
    window.history.back();
  }

  goToDetail(article: any) {
    this.newsService.selectedArticle = article;
    const encodedUrl = encodeURIComponent(article.url);
    this.router.navigate(['/news', encodedUrl]);
  }

}



/*import { Component, OnInit } from '@angular/core';
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

  /*goBack() {
    window.history.back();
  }
}*/




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


