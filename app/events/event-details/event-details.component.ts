import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

import { IEvent, ISession } from "../shared/event.model";

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .event-image { max-height: 100px; }
        a { cursor:pointer; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode:boolean;

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        // identify the last id on the sessions array in the event
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        // increment it by one
        session.id = nextId + 1;
        // add the new session to the end of the event sessions array
        this.event.sessions.push(session);
        // return to the sessions list
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false;
    }
}