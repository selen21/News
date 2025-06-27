import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    ShortenPipe
  ],

  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ShortenPipe,
    CommonModule
  ]
})
export class SharedModule { }
