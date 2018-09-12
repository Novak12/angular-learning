import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero'
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroService) { }

  ngOnInit() {

  }
  getHeroes() {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes.slice(1, 5))
  }
}
