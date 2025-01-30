import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
      <button
        (click)="store.removeCount()"
        [disabled]="store.removeCountDisabled()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ store.counter() }}</span>
      <button (click)="store.addCount()" class="btn btn-primary">+</button>
    </div>

    <div>
      <p>{{ store.fizzBuzz() }}</p>
    </div>`,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
  // counter = signal(0);

  // getcounter() {
  //   return this.counter.asReadonly();
  // }

  // addCount() {
  //   this.counter.update((current) => current + 1);
  // }

  // removeCount() {
  //   if (this.counter() > 0) {
  //     this.counter.update((current) => current - 1);
  //   }
  // }

  // fizzBuzz = computed(() => {
  //   const counter = this.counter();
  //   if (counter === 0) {
  //     return '';
  //   }
  //   if (counter % 3 === 0 && counter % 5 === 0) {
  //     return 'FizzBuzz';
  //   }
  //   if (counter % 3 === 0) {
  //     return 'Fizz';
  //   }
  //   if (counter % 5 === 0) {
  //     return 'Buzz';
  //   }
  //   return '';
  // });
}
