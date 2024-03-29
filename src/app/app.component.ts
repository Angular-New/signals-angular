import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { PrimoComponent } from './components/primo/primo.component';

@Component({
  selector: 'sg-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent, PrimoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
