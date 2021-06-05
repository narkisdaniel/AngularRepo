import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokePageComponent } from './components/joke-page/joke-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'jokes/:keyword/:index', component: JokePageComponent },
  { path: 'jokes/:type/:keyword/:index', component: JokePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
