import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

type CountBy = 1 | 3 | 5;
type CounterState = {
  counter: number;
  by: CountBy;
};

export const CounterStore = signalStore(
  withState<CounterState>({ counter: 0, by: 1 }),
  withMethods((store) => {
    return {
      setBy: (by: CountBy) => patchState(store, { by }),
      addCount: () =>
        patchState(store, { counter: store.counter() + store.by() }),
      removeCount: () =>
        patchState(store, { counter: store.counter() - store.by() }),
    };
  }),
  withComputed((store) => {
    return {
      removeCountDisabled: computed(() => store.counter() - store.by() < 0),
      fizzBuzz: computed(() => {
        const counter = store.counter();
        if (counter === 0) return '';
        if (counter % 3 === 0 && counter % 5 === 0) return 'FizzBuzz';
        if (counter % 3 === 0) return 'Fizz';
        if (counter % 5 === 0) return 'Buzz';
        return '';
      }),
    };
  }),
  withHooks({
    onInit(store) {
      const savedState = localStorage.getItem('counter');
      watchState(store, (state) => {
        const persistenceSate = {
          counter: state.counter,
          by: state.by,
        };
        localStorage.setItem('counter', JSON.stringify(persistenceSate));
      });
    },
  }),
);
