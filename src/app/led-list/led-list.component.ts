import { Component, OnInit } from '@angular/core';
import { Leds } from '../model/led';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit {

  leds: Leds = [
    {
      index: 0,
      color: 'red'
    },
    {
      index: 1,
      color: 'green'
    },
    {
      index: 2,
      color: 'blue'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
