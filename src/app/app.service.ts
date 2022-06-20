import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tickets } from './shared/ticket';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  public getTickets(): Observable<Tickets> {
    return this.http.get<Tickets>(`assets/tickets.json`);
  }
}
