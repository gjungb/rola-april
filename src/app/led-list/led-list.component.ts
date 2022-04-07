import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription, takeUntil, tap, timer } from 'rxjs';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit, OnDestroy {
  leds!: Leds;

  private sub?: Subscription;

  private readonly destroy$ = new EventEmitter<void>();

  constructor(private readonly service: LedService) {}

  ngOnInit(): void {
    this.sub = timer(2_000, 5_000).subscribe({
      next: (value) => console.log(value),
    });

    this.service
      .readLeds()
      .pipe(
        tap((value) => console.log(value)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (value) => {
          this.leds = value;
        },
        complete: () => console.log('habe fertig'),
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.destroy$.emit();
  }

  changeLedColor(index: number): void {
    // @todo effect / side effect
    // 1.
    // this.leds[index].color = 'goldenrod';
    // 2.
    this.leds[index] = {
      index: index,
      color: 'lightblue',
    };
  }
}
