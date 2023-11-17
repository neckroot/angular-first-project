import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgClass, NgIf],
})
export class MessageComponent {
  private _messageService = inject(MessageService);

  public message$ = this._messageService.message$;

  constructor() {
    this.message$
      .pipe(debounceTime(3000))
      .subscribe(() => this.message$.next({ message: '', type: null }));
  }
}
