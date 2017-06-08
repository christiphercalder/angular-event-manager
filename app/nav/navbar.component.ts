import { Component, OnInit } from '@angular/core';

import { AuthService } from "../events/user/auth.service";
import { EventService } from "../events/shared/event.service";
import { ISession } from "../events/shared/event.model";

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

    // Functions
    constructor(private auth:AuthService, private eventService: EventService) { }

    ngOnInit() { }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                // console.log(this.foundSessions);
            })
        
    }
}