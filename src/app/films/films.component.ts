import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/films';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films : Film[] = [];

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms()
      .subscribe((films: Film[]) => {
          this.films = films;
      })
  }

}
