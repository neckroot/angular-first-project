import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { Location, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BasketContainerComponent } from './basket-container/basket-container.component';
import { CheckboxService } from '../services/checkbox.service';
import { map } from 'rxjs';
import { TaskService } from '../services/task.service';
import { MessageService } from '../services/message.service';

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
  private taskService = inject(TaskService);
  private messageService = inject(MessageService);

  public status$ = this.checkboxService.statement$.pipe(
    map((value) => {
      return value.length > 0 && value.every((v) => v);
    }),
  );

  constructor(private _location: Location) {}

  public changeStatus(event: Event) {
    this.checkboxService.statement$.value.forEach((_, id) => {
      this.checkboxService.changeState(
        id,
        (<HTMLInputElement>event.target).checked,
      );
    });
  }
  public restoreTasks() {
    if (!this.checkboxService.anyChecked) return;
    this.checkboxService.trueIds.map((i) => this.taskService.restore(i));
    this.checkboxService.trueIds.map((i) => this.checkboxService.remove(i));
    this.messageService.log('Tasks restored!', 'success');
  }

  public removeTasks() {
    if (!this.checkboxService.anyChecked) return;
    this.checkboxService.trueIds.map((i) => this.taskService.remove(i));
    this.checkboxService.trueIds.map((i) => this.checkboxService.remove(i));
    this.messageService.log('Tasks removed!', 'error');
  }

  public goBack() {
    this._location.back();
  }

  public ngOnDestroy() {
    this.checkboxService.removeAll();
  }
}
