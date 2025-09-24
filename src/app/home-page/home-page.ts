import { Component } from '@angular/core';
import { HEROES } from '../datuak-heroes';
import { Hero } from '../hero';
import { AppRoutingModule } from "../app.routes";

@Component({
  selector: 'app-home-page',
  imports: [AppRoutingModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  heroes: Hero[] = HEROES.slice(0,4); //destacar 4 heroes

}
