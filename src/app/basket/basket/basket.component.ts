import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { Location, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BasketContainerComponent } from '../basket-container/basket-container.component';
import { CheckboxService } from '../../services/checkbox.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  standalone: true,
  imports: [RouterLink, BasketContainerComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasketComponent implements OnDestroy {
  private checkboxService = inject(CheckboxService);

  public status = this.checkboxService.statement$.pipe(
    map((value) => {
      return value.length > 0 && value.every((v) => v);
    }),
  );

  constructor(private _location: Location) {}

  changeStatus(event: Event) {
    this.checkboxService.statement$.value.forEach((_, id) => {
      this.checkboxService.changeState(
        id,
        (<HTMLInputElement>event.target).checked,
      );
    });
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy() {
    this.checkboxService.removeAll();
  }
}
