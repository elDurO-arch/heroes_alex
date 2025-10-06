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
}
