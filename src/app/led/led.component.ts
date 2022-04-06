import { Component, Input, OnInit } from '@angular/core';
import { Color, Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {

  @Input('piLed')
  led: Led = {
    index: 0,
    color: '#ccff22' as Color
  }

  constructor() { }

  ngOnInit(): void {
  }

}
