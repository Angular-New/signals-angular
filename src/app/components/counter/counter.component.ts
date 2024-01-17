import { ChangeDetectionStrategy, Component, computed, Signal, signal, untracked, WritableSignal } from '@angular/core';

@Component({
  selector: 'sg-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter: WritableSignal<number> = signal(0);

  // computed работает, принимая один или несколько исходных сигналов и создавая новый сигнал
  // когда исходный сигнал изменяется (в нашем случае сигнал счетчика), вычисленный сигнал «deriveCounter» также мгновенно обновляется
  public derivedCounter: Signal<number> = computed(() => this.counter() * 10);

  // используя untracked(), мы можем получить доступ к значению сигнала счетчика, не создавая зависимости между счетчиком и сигналом DerivedCounter
  public untrackedDerivedCounter: Signal<number> = computed(() => untracked(this.counter) + 1);

  public increment(): void {
    console.log(`Updating counter...`);
    // в случае с сигналом счетчика мы можем устанавливать только числа, поскольку начальное значение сигнала было 0
    this.counter.set(this.counter() + 1);
  }

  // update принимает функцию, которая получает текущее значение сигнала в качестве входного аргумента, а затем возвращает новое значение сигнала
  public update(): void {
    this.counter.update((value: number) => value + 1);
  }
}
