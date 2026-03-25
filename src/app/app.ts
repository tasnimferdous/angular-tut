import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count: WritableSignal<number | String> = signal(1000000000);
  signalValue = signal(10);

  a = signal(35);
  b = signal(55);
  compute = computed(() => this.a() + this.b());

  constructor() {
    effect(() => {
      console.log(this.signalValue());
    });
  }

  setSignal() {
    if (this.count() == 1000000000) {
      this.count.set("Hello")
    } else {
      this.count.set(1000000000);
    }
  }

  computeSignal() {
    this.a.set(100);
    this.b.set(100);
  }
}
