import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })

export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    return value?.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
