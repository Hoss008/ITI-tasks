import { Component, signal } from '@angular/core';
import { Switch } from './components/switch/switch';
import { Cart } from './components/cart/cart';
import { FavComponent } from './components/favs/fav/fav';
import { ProductComponent } from "./components/product-component/product-component";

@Component({
  selector: 'app-root',
  imports: [Switch, Cart, FavComponent, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task1');
}
