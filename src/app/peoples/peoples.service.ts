import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from '../../models/people';
import { MessageService } from '../messages/message.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PeoplesService {
  private peoples: People[] = [];
  constructor( @Inject('API_URL') private apiUrl: string, private http: HttpClient, private messageService: MessageService ) { }

  private log(message: string) {
    this.messageService.add('PeopleService: ' + message);
  }

  getPeople(): Observable<People[]> {
    return this.query(`${this.apiUrl}people`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => {
        return <People[]> response
    })
  }

}
