import { Component , inject, signal } from '@angular/core';
import {HeroesList} from "../../data/datuak-heroes";
import {ActivatedRoute, RouterLink } from '@angular/router';
import { Hero } from '../../data/hero';


@Component({
  selector: 'app-heroe-page',
  imports: [RouterLink],
  templateUrl: './heroe-page.html',
  styleUrl: './heroe-page.css'
})
export class HeroePage {
  hero: Hero | undefined;
  
  private activateRoute = inject(ActivatedRoute);

  constructor() {
    //Access route parameters
    this.activateRoute.params.subscribe((params) => {
      console.log(params);
      //identifikatzaile daukat
      this.hero = HeroesList.find(hero => 
        hero.id == params['id']
      );     
    });
  }
}
