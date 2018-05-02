import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmsService } from './films/films.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeoplesService } from './peoples/peoples.service';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsService } from './starships/starships.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { SpeciesComponent } from './species/species.component';
import { SpeciesService } from './species/species.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './planets/planets.service';
import { FilmDetailsComponent } from './film-details/film-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    MessagesComponent,
    DashboardComponent,
    PeoplesComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FilmsService,
    MessageService,
    PeoplesService,
    PlanetsService,
    SpeciesService,
    StarshipsService,
    VehiclesService,
    {provide: 'API_URL', useValue: 'https://swapi.co/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
