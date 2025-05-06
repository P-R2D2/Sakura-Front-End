import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from './film/film-list/film-list.component';
import {FilmFormComponent} from './film/film-form/film-form.component';

const routes: Routes = [
  {path: '', component: FilmListComponent},
  {path: 'film', component: FilmFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
