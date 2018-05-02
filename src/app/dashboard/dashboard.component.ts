import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/films';
import { Dashboard } from '../../models/dashboard';
import { FilmsService } from '../films/films.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  films : Film[] = [];
  items = Dashboard;

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