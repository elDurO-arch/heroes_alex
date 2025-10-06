import { Component } from '@angular/core';
import { HeroesList } from '../../data/datuak-heroes';
import { Hero } from '../../data/hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes-page',
  imports: [RouterLink],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.css'
})
export class HeroesPage {
  heroes: Hero[] = HeroesList;

  deleteHero(id: number) {
  this.heroes = this.heroes.filter(hero => hero.id !== id);
}
trackByHeroId(index: number, hero: Hero): number {
    return hero.id;
  }

}
