import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EventThumbnailComponent } from "./event-thumbnail.component";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared/event.model";

@Component({
  selector: 'events-list',
  template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>        
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="clickedThumb(event.name)" [event]="event"></event-thumbnail>        
            </div>
        </div>        
    </div>    
    `

})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  
  constructor(private eventService: EventService, private toastr: ToastrService, 
                private route: ActivatedRoute) { }

  ngOnInit() {
    // ['events'] represents the events property created on the route in routes.ts
    this.events = this.route.snapshot.data['events']; 

    /** OLD METHOD BEFORE IMPLEMENTATION OF RESOLVE */
    // this.eventService.getEvents().subscribe(
    //   events => { this.events = events }
    // );
  }

  clickedThumb(eventName){
    this.toastr.success(eventName);
  }

}