import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Planet } from '../../models/planets';
import { MessageService } from '../messages/message.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PlanetsService {
  private planets: Planet[] = [];

  constructor( @Inject('API_URL') private apiUrl: string, private http: HttpClient, private messageService: MessageService ) { }

  private log(message: string) {
    this.messageService.add('PlanetService: ' + message);
  }

  getPlanets(): Observable<Planet[]> {
    return this.query(`${this.apiUrl}planets`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => {
        return <Planet[]> response
    })
  }
}
