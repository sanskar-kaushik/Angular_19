import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  counter: WritableSignal<number> = signal(0);
  num: number = 0;
  constructor() {
    // this.counter.set(5);
    // setTimeout(()=>{
    //   this.num += 50;
    //   this.counter.update((val) => val + 10);
    //   console.log(`num = ${this.num} and counter = ${this.counter()}`);
    // },4000);
    effect(()=>{
      console.log("Counter value update. Value is ",this.counter());
    })
  }
  updateCounter() {
    this.counter.update((val) => val + 1);
  }
}
