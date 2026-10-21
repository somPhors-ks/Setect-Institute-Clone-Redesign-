import { Footer } from './Components/footer/footer';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('setec-website');
}
