import { Component, OnInit } from '@angular/core';
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
    this.newsService.selectedArticle = this.articles[index];  // seçilen haberi ata
    this.router.navigate(['/news', index]);                   // detay sayfasına git
  }
  /*goToDetail(article: any) {
    // Haber URL'sini encode edip parametre olarak yolluyoruz
    const encodedUrl = encodeURIComponent(article.url);
    this.router.navigate(['/news', encodedUrl]);
  }*/
}

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




