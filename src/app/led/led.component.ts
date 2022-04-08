import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, Led } from '../model/led';

/**
 * Representational / Dumb / Stateless
 */
@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LedComponent implements OnInit {
  @Input('piLed')
  led: Led = {
    index: 0,
    color: '#ccff22' as Color,
  };

  @Output()
  ledChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   */
  get displayIndex(): string {
    return `${this.led.index + 1}`;
  }

  /**
   *
   * @param ev
   */
  handleClick(ev: MouseEvent): void {
    if (ev.ctrlKey) {
      this.ledChange.emit(this.led.index);
    }
  }
}
