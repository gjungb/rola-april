import { Injectable } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import { Color, Led, Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  /**
   *
   * @param color
   * @param index
   */
  convertColor(color: string, index?: number): Led;
  /**
   *
   * @param colors
   */
  convertColor(colors: string[]): Leds;
  /**
   *
   * @param value
   * @param index
   * @returns
   */
  convertColor(value: string | string[], index = 0): Led | Leds {
    if (Array.isArray(value)) {
      return value.map(
        (value, index): Led => ({ index, color: value as Color })
      );
    } else {
      return this.toLed(value, index);
    }
  }

  /**
   *
   * @param value Any String
   * @returns Whether the given value is a valid CSS color string
   */
  private isValidColorString(value: string): value is Color {
    return tinycolor(value).isValid();
  }

  /**
   * 
   * @param color 
   * @param index 
   * @returns 
   */
  private toLed(color: string, index: number): Led {
    if (this.isValidColorString(color)) {
      return {
        index,
        color,
      };
    } else {
      throw new Error(`"${color}" is no valid color`);
    }

  }
}
