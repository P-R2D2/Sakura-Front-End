import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from '@angular/material/button';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmListItemComponent } from './film/film-list-item/film-list-item.component';
import { FilmFormComponent } from './film/film-form/film-form.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmListItemComponent,
    FilmFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    MatAnchor,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
