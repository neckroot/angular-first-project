import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _message$ = new BehaviorSubject<{
    message: string;
    type: 'error' | 'success' | null;
  }>({ message: '', type: null });

  public log(message: string, type: 'error' | 'success') {
    this._message$.next({ message: message, type: type });
  }

  public get message$() {
    return this._message$;
  }
}
