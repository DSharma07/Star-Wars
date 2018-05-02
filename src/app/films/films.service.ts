import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../../models/films';
import { Results } from '../../models/results';
import { MessageService } from '../messages/message.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

@Injectable()
export class FilmsService {
  private films: Film[] = [];
  constructor( @Inject('API_URL') private apiUrl: string, private http: HttpClient, private messageService: MessageService) { }
  
  private log(message: string) {
    this.messageService.add('FilmService: ' + message);
  }

  getFilms(): Observable<Film[]> {
    return this.query(`${this.apiUrl}films`);
  }

  getById(id: number): Observable<Film> {
    return this.query(`${this.apiUrl}films/${id}`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => {
        return <Film[]> response
    })
  }

}