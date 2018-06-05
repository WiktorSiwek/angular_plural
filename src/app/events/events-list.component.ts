import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private _eventService: EventService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this._route.snapshot.data['events'];
  }

  handleThumbnailClick(name) {
    this._toastr.success(name);
  }
}
