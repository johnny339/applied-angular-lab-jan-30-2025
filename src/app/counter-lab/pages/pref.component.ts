import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div class="join">
    <button
      (click)="store.setBy(1)"
      [disabled]="store.by() === 1"
      class="btn join-item"
    >
      1 Count
    </button>
    <button
      (click)="store.setBy(3)"
      [disabled]="store.by() === 3"
      class="btn join-item"
    >
      3 Count
    </button>
    <button
      (click)="store.setBy(5)"
      [disabled]="store.by() === 5"
      class="btn join-item"
    >
      5 Count
    </button>
  </div>`,
  styles: ``,
})
export class PrefComponent {
  store = inject(CounterStore);

  // by = signal<1 | 3 | 5>(1);

  // setBy(value: 1 | 3 | 5) {
  //   this.by.set(value);
  // }
}
