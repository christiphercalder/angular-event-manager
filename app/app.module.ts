import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

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

// MODELS
import { IEvent } from "./events/shared/event.model";

// SERVICES
import { AuthService } from "./events/user/auth.service";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";

// ROUTES
import { appRoutes } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)    
    ],
    declarations: [
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,        
        NavBarComponent,   
        SessionListComponent,
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        AuthService,
        EventRouteActivatorService, 
        EventsListResolverService,
        EventService, 
        ToastrService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
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