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
    color: string;
}

/**
 * Eine Liste von Leds {@see Led}
 */
export type Leds = Array<Led>;
