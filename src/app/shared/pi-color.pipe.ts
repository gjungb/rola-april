import { Pipe, PipeTransform } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import { Color } from '../model/led';

@Pipe({
  name: 'piColor',
})
export class PiColorPipe implements PipeTransform {
  transform(value: Color, format?: any): string {
    return tinycolor(value).toString(format);
  }
}
