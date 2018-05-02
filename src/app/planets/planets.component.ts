import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planets';
import { PlanetsService } from './planets.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets : Planet[] = [];

  constructor(private planetService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe((planets: Planet[]) => {
          this.planets = planets;
      })
  }

}
