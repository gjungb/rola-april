import { Component, OnInit } from '@angular/core';
import { Color, Leds } from '../model/led';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit {
  leds: Leds = [
    {
      index: 0,
      color: 'red' as Color,
    },
    {
      index: 1,
      color: 'green' as Color,
    },
    {
      index: 2,
      color: 'blue' as Color,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
