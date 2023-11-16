import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CheckboxService } from '../../services/checkbox.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class DeletedTaskComponent implements OnInit {
  @Input() task!: string;
  @Input() i!: number;

  private checkboxService = inject(CheckboxService);

  public status = this.checkboxService.statement$.pipe(
    map((value) => value[this.i]),
  );

  ngOnInit() {
    this.checkboxService.initState(false);
  }

  onChange(event: Event) {
    this.checkboxService.changeState(
      this.i,
      (<HTMLInputElement>event.target).checked,
    );
  }
}
