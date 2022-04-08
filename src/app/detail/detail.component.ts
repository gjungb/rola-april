import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  led?: Led;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: LedService
  ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('index') ?? '0';

    this.service.readLeds().subscribe({
      next: (leds) => (this.led = leds[Number(index)]),
    });
  }
}
