import { Component } from '@angular/core';
import { HeroesList } from '../../data/datuak-heroes';
import { Hero } from '../../data/hero';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  heroes: Hero[] = HeroesList.slice(0,4); //destacar 4 heroes

}
