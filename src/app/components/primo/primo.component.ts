import { ChangeDetectionStrategy, Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IVehicle {
  year: number;
  model: string;
  price: number;
}

class Vehicle implements IVehicle {
  constructor(public year: number, public model: string, public price: number) {
  }
}

@Component({
  selector: 'sg-primo',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimoComponent {
  public vehicles: WritableSignal<IVehicle[]> = signal<IVehicle[]>([
    new Vehicle(2010, 'fiat', 12000),
    new Vehicle(2011, 'ford', 22000),
    new Vehicle(2012, 'bmw', 44000),
  ]);

  public quantity: WritableSignal<number> = signal<number>(0);
  public qts: WritableSignal<number[]> = signal<number[]>([1, 2, 3, 4, 5]);

  // create a new signal based on current signals
  public totalPrice: Signal<number> = computed(() => Object.values(this.vehicles()).reduce((acc: number, item: IVehicle) => acc + item.price, 0));
  private qtyEffect = effect(() => console.log('Quantity effect: ', this.quantity()));

  public onQuantitySelected(qty: number): void {
    // replace the signal value
    this.quantity.set(qty);
  }

  public onDuplicateQuantity(): void {
    // update signal value by it's current value
    this.quantity.update((value: number) => value * 2);
  }
}
