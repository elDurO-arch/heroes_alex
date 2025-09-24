import { Component } from '@angular/core';
import { HEROES } from '../datuak-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-page',
  imports: [],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.css'
})
export class HeroesPage {
  heroes: Hero[] = HEROES;
}
