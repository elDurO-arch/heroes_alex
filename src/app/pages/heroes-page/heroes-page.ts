import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesList } from '../../data/datuak-heroes';
import { Hero } from '../../data/hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.css'
})
export class HeroesPage implements OnInit {
  heroes: Hero[] = HeroesList;
  heroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  addHero() {
    if (this.heroForm.invalid) return;

    const newId = this.heroes.length > 0 ? Math.max(...this.heroes.map(h => h.id)) + 1 : 1;
    const newHero: Hero = {
      id: newId,
      name: this.heroForm.value.name
      
    };

    this.heroes.push(newHero);
    this.heroForm.reset();
  }

  deleteHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

  trackByHeroId(index: number, hero: Hero): number {
    return hero.id;
  }
}