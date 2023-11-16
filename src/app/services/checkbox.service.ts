import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckboxService {
  public statement$ = new BehaviorSubject<boolean[]>([]);

  initState(state: boolean) {
    this.statement$.next([...this.statement$.value, state]);
  }

  changeState(id: number, state: boolean) {
    const values = this.statement$.value;

    values.splice(id, 1, state);

    this.statement$.next(values);
  }

  remove(id: number) {
    const values = this.statement$.value;

    values.splice(id, 1);

    this.statement$.next(values);
  }

  removeAll() {
    this.statement$.next([]);
  }
}
