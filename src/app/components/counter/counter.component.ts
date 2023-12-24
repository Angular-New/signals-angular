import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'sg-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter: WritableSignal<number> = signal(0);

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
