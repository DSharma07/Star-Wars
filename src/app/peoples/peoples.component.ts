import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';
import { PeoplesService } from './peoples.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  peoples : People[] = [];

  constructor(private peopleService: PeoplesService) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples(): void {
    this.peopleService.getPeople()
      .subscribe((peoples: People[]) => {
          this.peoples = peoples;
      })
  }

}
