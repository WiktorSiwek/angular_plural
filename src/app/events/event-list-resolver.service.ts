import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/events.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private _eventService: EventService) {}
    resolve() {
        return this._eventService.getEvents();
    }
}
