import { Component, OnInit } from '@angular/core';

import { AuthService } from "../events/user/auth.service";
import { EventService } from "../events/shared/event.service";
import { IEvent, ISession } from "../events/shared/event.model";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px; }
        #searchForm { margin-right: 100px; }
        li > a.active { color: #F97924; }
        @media (max-width: 1024px) { #searchForm { display: none; } }
    `]
})

export class NavBarComponent implements OnInit {
    searchTerm: string = "";
    foundSessions: ISession[];
    events: IEvent[];
    // Functions
    constructor(private auth:AuthService, private eventService: EventService) { }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events;
        });
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                // console.log(this.foundSessions);
            })
        
    }
}