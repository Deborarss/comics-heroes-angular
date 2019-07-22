import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'herois', component: HeroesComponent },
  { path: 'heroi/:id', component: HeroComponent },
  { path: 'procurar/:name', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
