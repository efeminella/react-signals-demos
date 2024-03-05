import {signal, effect} from '@preact/signals-react';

export const counter = signal<number>(0);
export const minimum = signal<number>(NaN);
export const maximum = signal<number>(NaN);

effect(() => {
  if (!isNaN(minimum.value)) {
    counter.value = Math.max(counter.value, minimum.value);
  }
  if (!isNaN(maximum.value)) {
    counter.value = Math.min(counter.value, maximum.value);
  }
});

export const increment = function() {
  ++counter.value;
};
export const decrement = function() {
  --counter.value;
};
export const setMinimum = function(val: string | number) {
  minimum.value = val as number;
};
export const setMaximum = function(val: string | number) {
  maximum.value = val as number;
};
export const reset = function() {
  counter.value = 0;
  minimum.value = NaN;
  maximum.value = NaN;
};
