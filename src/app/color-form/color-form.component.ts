import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { Led } from '../model/led';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss'],
})
export class ColorFormComponent implements OnInit {
  color = 'red';

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      color: this.fb.control(this.color, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });

    this.form
      .get('color')
      ?.valueChanges.pipe(
        debounceTime(300),
        tap((value) => console.log(value))
      )
      .subscribe({
        // effect / side effect
      });

    this.form.statusChanges
      .pipe(tap((status) => console.log(status)))
      .subscribe();
  }

  update(value: Pick<Led, 'color'>): void {
    debugger;
  }
}
