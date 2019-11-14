import { Dvd } from './../models/dvd';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() => {
        this.dvdSubject$.next([
          { title: 'DVD - Beegees', year: 2016, genre: 'Music' },
          { title: 'The Wind', year: 2018, genre: 'Movie' }
        ]);
      });
  }

  add(d: Dvd) {
    this.dvdSubject$.getValue().push(d);
  }

  remove(i: number) {
    const dvds = this.dvdSubject$.getValue();

    if (i >= 0 && i < dvds.length) {
      dvds.splice(i, 1);
    }
  }

  get(i: number): Observable<Dvd> {
    return this.dvdSubject$.asObservable()
      .pipe(
        map(dvds => (i >= 0 && i < dvds.length) ? dvds[i] : null),
        delay(1000)
      );
  }
}
