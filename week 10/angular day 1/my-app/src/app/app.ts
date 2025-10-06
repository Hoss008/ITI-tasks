import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';

@Component({
  selector: 'app-root',
  imports: [First],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
