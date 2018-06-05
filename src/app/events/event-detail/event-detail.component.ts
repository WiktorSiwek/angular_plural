import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '..';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent {
    event: IEvent;
    constructor(private eventService: EventService, private _route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this._route.snapshot.params['id']);
    }
}
