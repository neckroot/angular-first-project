import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BasketContainerComponent } from '../basket-container/basket-container.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  standalone: true,
  imports: [RouterLink, BasketContainerComponent],
})
export default class BasketComponent {
  constructor(private _location: Location) {}

  goBack() {
    this._location.back();
  }
}
