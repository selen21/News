import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { NewsModule } from './news/news.module';  // <--- ekle bunu
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    //LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NewsModule,            // <--- ekle burada
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


