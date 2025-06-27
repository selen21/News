import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }



/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }*/

