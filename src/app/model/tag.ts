/**
 * Ein eindeutiger Tag
 * 
 * {@link https://serokell.io/blog/typescript-for-haskellers#newtype}
 */
export interface Tag {
  readonly __tag: unique symbol;
}
