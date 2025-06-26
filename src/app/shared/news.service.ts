import { Injectable } from '@angular/core';
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
}

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

