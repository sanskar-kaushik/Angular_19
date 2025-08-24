import { Component, computed, linkedSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  counter: WritableSignal<number> = signal(0);
  num: number = 5;
  // total = computed(()=>{
  //   return this.counter()+this.num;
  // })
  // total = linkedSignal(()=>{
  //   return this.counter()+this.num;
  // })
   total = linkedSignal({
    source: this.counter,
    computation: ()=>{ return this.counter()+this.num}
   })
  updateCounter() {
    this.counter.update((val) => val + 8);
  }
}
