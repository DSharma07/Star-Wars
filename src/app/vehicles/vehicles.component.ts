import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicles';
import { VehiclesService } from './vehicles.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles : Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe((vehicles: Vehicle[]) => {
          this.vehicles = vehicles;
      })
  }
}
