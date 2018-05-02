import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Species } from '../../models/species';
import { MessageService } from '../messages/message.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

@Injectable()
export class SpeciesService {
  private species: Species[] = [];

  constructor( @Inject('API_URL') private apiUrl: string, private http: HttpClient, private messageService: MessageService ) { }

  private log(message: string) {
    this.messageService.add('SpeciesService: ' + message);
  }

  getSpecies(): Observable<Species[]> {
    return this.query(`${this.apiUrl}species`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => {
        return <Species[]> response
    })
  }
}
