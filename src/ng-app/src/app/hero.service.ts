import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from "../model/hero";
import { HEROES } from "../mock/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id == id));
  }
}
