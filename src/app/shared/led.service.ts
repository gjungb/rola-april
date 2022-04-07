import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  constructor(private readonly http: HttpClient) {}

  readLeds(): Observable<Leds> {
    const result$ = this.http.get<string[]>(
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors'
    );

    return result$.pipe(
      map((colors) => {
        return colors.map((color, index) => {
          return {
            color,
            index,
          };
        });
      })
    );

    /*     return of([
      {
        index: 0,
        color: 'red',
      },
      {
        index: 1,
        color: 'green',
      },
      {
        index: 2,
        color: 'blue',
      },
    ]).pipe(delay(3_000)); */
  }
}
