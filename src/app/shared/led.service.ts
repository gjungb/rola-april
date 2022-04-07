import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Led, Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  constructor(private readonly http: HttpClient) {}

  readLeds(): Observable<Leds> {
    const result$ = this.http.get<string[]>(
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors'
    );

    return result$.pipe(map((colors) => this.convertColor(colors)));

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

  /**
   * 
   * @param color 
   * @param index 
   */
  private convertColor(color: string, index?: number): Led;
  /**
   * 
   * @param colors 
   */
  private convertColor(colors: string[]): Leds;
  /**
   * 
   * @param value 
   * @param index 
   * @returns 
   */
  private convertColor(value: string | string[], index = 0): Led | Leds {
    if (Array.isArray(value)) {
      return value.map((color, index): Led => ({ index, color }));
    } else {
      return {
        index,
        color: value,
      };
    }
  }
}
