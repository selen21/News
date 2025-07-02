import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs'; // Üste ekle!
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  selectedArticle: any = null;
  lastSearchQuery: string = '';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/top-headlines?country=us&apiKey=${environment.apiKey}`
    );
  }

  searchArticles(query: string): Observable<any> {
    if (!query || query.trim() === '') {
      // Boş sorgu yapılmasın, boş bir liste dön
      return of({ articles: [] });
    }
    this.lastSearchQuery = query;
    return this.http.get(
      `${environment.apiUrl}/everything?q=${query}&apiKey=${environment.apiKey}`
    );
  }

  getByCategory(category: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`
    );
  }

  getExchangeRates(): Observable<any> {
    return this.http.get<any>('https://api.frankfurter.app/latest?from=TRY&to=USD,EUR,GBP');
  }

  getWeather(city: string = 'Istanbul'): Observable<any> {
    const apiKey = '643ac7282d0e52952fa45e3956f16b65';
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=tr`);
  }

  getTopHeadlinesByCountry(countryCode: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=1dc8a65792814bfeb1b8c6345448e1ef`);
  }
  /*getArticleByUrl(url: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/everything?q="${url}"&apiKey=${environment.apiKey}`
    ).pipe(
      map((response: any) => response.articles.find((a: any) => a.url === url))
    );
  }*/
}



/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/top-headlines?country=us&apiKey=${environment.apiKey}`
    );
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/everything?q=${query}&apiKey=${environment.apiKey}`
    );
  }

  getByCategory(category: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`
    );
  }
}*/



/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/top-headlines?country=us&apiKey=${environment.apiKey}`);
  }

  getNewsByCategory(category: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`);
  }

  searchNews(query: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/everything?q=${query}&apiKey=${environment.apiKey}`);
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/everything?q=${query}&apiKey=${environment.apiKey}`);
  }

  getByCategory(category: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`);
  }
}*/

