import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { HeroePage } from './pages/heroe-page/heroe-page';
import { HeroesPage } from './pages/heroes-page/heroes-page';

export const routes: Routes = [
    { path: '', component: HomePage},
    {path: 'heroes', component: HeroesPage},
    {path: 'hero/:id', component: HeroePage}
];

