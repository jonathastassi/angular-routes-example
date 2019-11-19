import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Electronic } from '../models/electronic';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

  constructor() { 
    timer(1200)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: 'Headphone', brand: 'Bose', price: 200, description: 'Noise Canceling'},
          { name: 'Portable HD', brand: 'Samsung', price: 150, description: 'Noise Canceling'},
          { name: 'Monitor', brand: 'LG', price: 1100, description: 'Noise Canceling'},
          { name: 'Mouse', brand: 'Logitech', price: 70, description: 'Noise Canceling'},
        ])
      });
  }

  get(i: number) {
    return this.electronics$
      .pipe(
        map(dvds => (i >= 0 && dvds.length) ? dvds[i] : null),
        delay(1000)
      )
  }

  add(e: Electronic) {
    const electronics = this.electronicSubject$.getValue();
    electronics.push(e);
  }

  remove(i: number) {
    const electronics = this.electronicSubject$.getValue();
    if (i >= 0 && i < electronics.length) {
      electronics.splice(i, 1);
    }
  }
}
