import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '..';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';
    constructor(
        private eventService: EventService,
        private _route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this._route.data.forEach((data) => {
            this.event = this._route.snapshot.data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
