import { Injectable } from '@angular/core';
import { from, interval, Observable, of, timer, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor() { }

  public calculate(): Observable<number> {
    return timer(3000)
      .pipe(
        map(() => Math.random() * 100)
      );
  }

  public calculateWithoutTimer(): Observable<number> {
    return of(Math.random() * 100);
  }

  public stream(): Observable<number> {
    return interval(200)
  }
}
