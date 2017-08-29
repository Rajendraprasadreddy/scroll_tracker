import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour Of Heroes';
  heroes: Hero[];
 selectedHero: Hero;

constructor(
private router: Router,
private heroService: HeroService) { }

getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

ngOnInit(): void {
    this.getHeroes();
  }

 onSelect(hero: Hero): void {
 debugger;
   this.selectedHero = hero;
 }
 gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
