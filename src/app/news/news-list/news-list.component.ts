import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  sliderArticles: any[] = [];
  searchQuery = '';
  activeCategory = '';
  private searchSubject = new Subject<string>();

  // 🔸 Eklenen veriler
  exchangeRates = [
    { code: 'USD', rate: 32.50 },
    { code: 'EUR', rate: 35.20 },
    { code: 'GBP', rate: 41.10 }
  ];

  weather = {
    city: 'İstanbul',
    temp: 28,
    description: 'Güneşli'
  };

  // 🔸 Tarih ve saat için değişkenler
  currentDate: string = '';
  currentTime: string = '';

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.loadTopHeadlines();
    this.startClock(); // ⏰ Saat başlasın

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.newsService.searchArticles(query))
    ).subscribe((data: any) => {
      this.articles = data.articles;
      this.updateSliderArticles();
    });
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

  loadTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
      this.updateSliderArticles();
    });
  }

  updateSliderArticles() {
    this.sliderArticles = this.articles.slice(0, 10); // İlk 10 haberi slider yap
  }

  onSearchChange(query: string) {
    this.activeCategory = '';
    if (query.trim().length > 2) {
      this.searchSubject.next(query);
    } else if (!query.trim()) {
      this.loadTopHeadlines();
    }
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    this.searchQuery = '';
    this.newsService.getByCategory(category).subscribe((data: any) => {
      this.articles = data.articles;
      this.updateSliderArticles();
    });
  }

  goToDetail(article: any) {
    this.newsService.selectedArticle = article;
    const encodedUrl = encodeURIComponent(article.url);
    this.router.navigate(['/news', encodedUrl]);
  }
}







/*import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    // İlk açılışta anasayfa haberlerini getir
    this.getTopHeadlines();

    // Arama inputundaki değişiklikleri dinle, 300ms bekle ve tekrar eden değerleri filtrele
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.newsService.searchArticles(query))
    ).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  onSearchChange(query: string) {
    if (query.trim().length > 2) {
      this.searchSubject.next(query);
    } else {
      this.getTopHeadlines();
    }
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  goToDetail(article: any) {
    this.newsService.selectedArticle = article;
    const encodedUrl = encodeURIComponent(article.url);
    this.router.navigate(['/news', encodedUrl]);
  }

  filterByCategory(category: string) {
    this.newsService.getByCategory(category).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
}*/



/*import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getTopHeadlines();

    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap(query => this.newsService.searchArticles(query))
      )
      .subscribe((data: any) => {
        this.articles = data.articles;
      });
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  onSearchChange(query: string) {
    if (query.trim().length > 2) {
      this.searchSubject.next(query);
    } else {
      this.getTopHeadlines();
    }
  }

  filterByCategory(category: string) {
    this.newsService.getByCategory(category).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
  
  goToDetail(article: any) {
  this.newsService.selectedArticle = article;
  this.router.navigate(['/news', encodeURIComponent(article.url)]);
}

  /*goToDetail(article: any) {
  const encodedUrl = encodeURIComponent(article.url); // URL'yi encode et
  this.router.navigate(['/news', encodedUrl]);        // URL ile detay sayfasına git
}*/

  /*goToDetail(article: any) {
    // Haber URL'sini encode edip parametre olarak yolluyoruz
    const encodedUrl = encodeURIComponent(article.url);
    this.router.navigate(['/news', encodedUrl]);
  }*/
//}*/




/*import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getTopHeadlines();

    this.searchSubject.pipe(
      debounceTime(500),
      switchMap(query => this.newsService.searchArticles(query))
    ).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  onSearchChange(query: string) {
    if (query.trim().length > 2) {
      this.searchSubject.next(query);
    } else {
      this.getTopHeadlines();
    }
  }

  filterByCategory(category: string) {
    this.newsService.getByCategory(category).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  goToDetail(index: number) {
    this.router.navigate(['/news', index]);
  }
}*/



/*import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getTopHeadlines();

    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap(query => this.newsService.searchArticles(query))
      )
      .subscribe((data: any) => {
        this.articles = data.articles;
      });
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  onSearchChange(query: string) {
    if (query.trim().length > 2) {
      this.searchSubject.next(query);
    } else {
      this.getTopHeadlines();
    }
  }

  filterByCategory(category: string) {
    this.newsService.getByCategory(category).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  goToDetail(index: number) {
    this.router.navigate(['/news', index]);
  }
}*/



/*import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { Router } from '@angular/router';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: any[] = [];
  
  searchQuery: string = '';
searchSubject = new Subject<string>();

  constructor(private newsService: NewsService, private router: Router) {}

  goToDetail(index: number) {
  this.router.navigate(['/news', index]);
}

  ngOnInit(): void {
    this.getTopHeadlines();

    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap(query => this.newsService.searchArticles(query))
      )
      .subscribe((data: any) => {
        this.articles = data.articles;
      });
  }

}*/




