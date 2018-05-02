import {Component, OnInit} from '@angular/core';
import { FilmsService } from "../films/films.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Film } from '../../models/films';
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {

  movie: Film;

  constructor(private movieService: FilmsService, private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      movieService.getById(params['id'])
        .subscribe((movie: Film) => {
          console.log(movie);
          this.movie = movie;
        });
    });
  }

}
