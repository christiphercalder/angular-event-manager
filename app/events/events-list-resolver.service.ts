import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";


@Injectable()
export class EventsListResolverService implements Resolve<any> {
    constructor(private eventService: EventService) { }

    /**
     * uses the map function isntead of subscribe so that it will pass the observable itself instead of the data
     */
    resolve(){
        return this.eventService.getEvents().map(events => events);
    }
}
