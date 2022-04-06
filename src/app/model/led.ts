import * as tinycolor from 'tinycolor2';

/**
 * Ein leuchtendes Ding
 *
 * Siehe Leuchtdiode {@link https://de.wikipedia.org/wiki/Leuchtdiode}
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farbe als valider CSS-String
   *
   * @example goldenrod
   * @example rgba(127, 255, 18, .5)
   */
  color: Color;
}

/**
 * Eine Liste von Leds {@see Led}
 */
export type Leds = Array<Led>;

const __tag = Symbol('some tag');

/**
 * @todo Dokumentation
 */
interface Tag {
  readonly [__tag]: unique symbol;
}

/**
 * @todo Dokumentation
 */
export type Color = string & Tag;

export function isColor(value: string): value is Color {
  return tinycolor(value).isValid();
}
