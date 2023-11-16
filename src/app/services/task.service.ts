import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks$ = new BehaviorSubject<string[]>([
    'fsggbdfgdfgdggdgdgdgddsfjkbdsnbkdsnbdsklbnsblnsdbnbkjldsnbdkjbsdnbsdb',
    'vsbb',
  ]);
  public basket$ = new BehaviorSubject<string[]>([
    'fsggbdfgdfgdggdgdgdgddsfjkbdsnbkdsnbdsklbnsblnsdbnbkjldsnbdkjbsdnbsdb',
    'vsbb',
  ]);

  public addTask(task: string) {
    this.tasks$.next([...this.tasks$.value, task]);
  }

  public deleteTaskById(id: number) {
    this.basket$.next(
      this.basket$.value.concat(this.tasks$.value.splice(id, 1)),
    );
  }

  public remove(id: number) {
    const values = this.basket$.value;

    values.splice(id, 1);
    this.basket$.next(values);
  }

  public restore(id: number) {
    this.tasks$.next(
      this.tasks$.value.concat(
        this.basket$.value.splice(this.basket$.value.length - id - 1, 1),
      ),
    );
  }
}
