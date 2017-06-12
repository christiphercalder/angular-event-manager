// ANGULAR MODULES
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// COMMON FOLDER INDEX
import { CollapsibleWellComponent, 
         SimpleModalComponent,
         ModalTriggerDirective,
         JQ_TOKEN,
         TOASTR_TOKEN, 
         Toastr } from "./common/index";

// CUSTOM COMPONENTS
import { CreateEventComponent } from "./events/create-event.component";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { NavBarComponent } from "./nav/navbar.component";
import { SessionListComponent } from "./events/event-details/session-list.component";
import { UpvoteComponent } from "./events/event-details/upvote.component";
import { LocationValidator } from "./events/location-validator.directive";

// MODELS
import { IEvent } from "./events/shared/event.model";

// PIPES
import { DurationPipe } from "./events/shared/duration.pipe";

// SERVICES
import { AuthService } from "./events/user/auth.service";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventResolver } from "./events/event-resolver.service";
import { EventService } from "./events/shared/event.service";
import { VoterService } from "./events/event-details/voter.service";


// ROUTES
import { appRoutes } from "./routes";

declare let toastr : Toastr;
declare let jQuery : Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)    
    ],
    declarations: [
        CollapsibleWellComponent,
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,        
        NavBarComponent,   
        SessionListComponent,
        SimpleModalComponent,
        UpvoteComponent,
        ModalTriggerDirective,
        DurationPipe,
        LocationValidator,
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        AuthService,
        EventResolver,
        EventsListResolverService,
        EventService, 
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        VoterService,
    ],
})
// Main Application Module
export class AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if (component.isDirty) {
        return window.confirm('You have not saved this event yet, are you sure you want to cancel?');
    }    
    return true;
}