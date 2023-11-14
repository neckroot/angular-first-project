import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _taskList$ = new BehaviorSubject<string[]>([
    'fsggbdfgdfgdggdgdgdgddsfjkbdsnbkdsnbdsklbnsblnsdbnbkjldsnbdkjbsdnbsdb',
    'vsbb',
  ]);
  private _basket$ = new BehaviorSubject<string[]>([
    'fsggbdfgdfgdggdgdgdgddsfjkbdsnbkdsnbdsklbnsblnsdbnbkjldsnbdkjbsdnbsdb',
    'vsbb',
  ]);

  get tasks$() {
    return this._taskList$;
  }

  get basket$() {
    return this._basket$;
  }

  addTask(task: string) {
    this._taskList$.next([...this._taskList$.value, task]);
  }

  deleteTaskById(id: number) {
    this._basket$.next(
      this._basket$.value.concat(this._taskList$.value.splice(id, 1)),
    );
  }
}
