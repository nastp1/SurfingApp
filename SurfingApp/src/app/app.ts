import { Component, signal } from '@angular/core';
import { Authorization } from './authorization/authorization';

@Component({
  selector: 'app-root',
  imports: [Authorization],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('SurfingApp');
}
