import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket, Tickets } from './shared/ticket';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'coding-assignment';
  public tickets$: Observable<Ticket[]>;

  constructor(service: AppService) {
    this.tickets$ = service
      .getTickets()
      .pipe(map((tickets: Tickets) => tickets.tickets));
  }
}
