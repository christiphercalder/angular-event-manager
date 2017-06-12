import { Routes } from "@angular/router";

import { CreateEventComponent } from "./events/create-event.component";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { Error404Component } from "./errors/404.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";


import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventResolver } from "./events/event-resolver.service";
/**
 * The root of the application relative to the server must be specified in the index.html file
 *  - <base href="/"> for server root
 *  - <base href="/someFolder/thisAppFolder"> for a couple folders down from server root
 */

// Application routes
export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventsListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/events/user/user.module#UserModule'}
]