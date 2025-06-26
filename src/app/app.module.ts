import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from './shared/news.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent,
    ShortenPipe,
    HighlightDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
