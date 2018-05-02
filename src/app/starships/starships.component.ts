import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starships';
import { StarshipsService } from './starships.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starShips : Starship[] = [];

  constructor(private starShipService: StarshipsService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships(): void {
    this.starShipService.getStarships()
      .subscribe((starShips: Starship[]) => {
          this.starShips = starShips;
      })
  }
}
