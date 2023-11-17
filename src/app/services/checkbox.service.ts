import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckboxService {
  public statement$ = new BehaviorSubject<boolean[]>([]);

  public initState(state: boolean) {
    this.statement$.next([...this.statement$.value, state]);
  }

  public get trueIds() {
    return this.statement$.value.reduce(
      (arr: Array<number>, v, i) => (v && arr.unshift(i), arr),
      [],
    );
  }

  public changeState(id: number, state: boolean) {
    const values = this.statement$.value;

    values.splice(id, 1, state);
    this.statement$.next(values);
  }

  public remove(id: number) {
    const values = this.statement$.value;

    values.splice(id, 1);
    this.statement$.next(values);
  }

  public removeAll() {
    this.statement$.next([]);
  }

  public get anyChecked() {
    return this.statement$.value.includes(true);
  }
}
