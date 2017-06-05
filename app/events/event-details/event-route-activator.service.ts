import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";

import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    /**
     * -if the service finds an event with the matching id, set to true (!! is cast to boolean)
     * -if not redirest to 404 page
     * @param route: the request route 
     */
    canActivate(route:ActivatedRouteSnapshot){       
        // + is a cast to a number
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}