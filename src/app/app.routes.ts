import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { HeroePage } from './heroe-page/heroe-page';
import { HeroesPage } from './heroes-page/heroes-page';

export const routes: Routes = [
    { path: '', component: HomePage},
    {path: 'heroes', component: HeroesPage},
    {path: 'hero', component: HeroePage}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }