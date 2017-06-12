import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { EventService } from "../shared/event.service";

import { IEvent, ISession } from "../shared/event.model";

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .event-image { max-height: 100px; }
        a { cursor:pointer; }
        .session-content { margin-bottom: 10px; }
        .sort-title {padding-left: 0px; padding-right: 0px; }
        .filter-title {padding-left: 0px; padding-right: 0px; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = "all";
    sortBy: string = "votes";

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {

        // Subscribe to the params observable to make angular aware of any changes 
        // in the routing url within a component         
        this.route.data.forEach((data) => {
                this.event = data['event'];
                // Reset the state of addMode to false so that 
                // create session is hidden when navigating away  
                this.addMode = false;
        }) ;       

        // CODE before subscribing to the params observable, 
        // doesnt work when navigating within the event details component to itself.
        // snapshot is not an observable

        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        // identify the last id on the sessions array in the event
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        // increment it by one
        session.id = nextId + 1;
        // add the new session to the end of the event sessions array
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        // return to the sessions list
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}