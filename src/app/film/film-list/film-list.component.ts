import { Component } from '@angular/core';
import {Film} from '../shared/film';

@Component({
  selector: 'app-film-list',
  standalone: false,
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {
  films: Film[] = [];

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }

  addFilm() {
    const newFilm: Film = {
      id: this.generateId(), // gera um ID tipo 'lpl3lxf9w5abqv'
      name: 'Filme de Exemplo',
      description: 'Descrição qualquer aqui',
      imageUrl: 'https://via.placeholder.com/300x400.png?text=Imagem+do+Filme'
    };

    this.films.push(newFilm);
  }
}
