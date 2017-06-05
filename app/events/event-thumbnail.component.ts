import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IEvent } from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`        
        .bold { font-weight: bolder; }
        .pad-left{ margin-left: 10px; }
        .thumbnail { min-height: 210px; }
    `]
})

export class EventThumbnailComponent implements OnInit {
    @Input() event:IEvent;
    
    constructor() { }
    ngOnInit() { }    

    getStartTimeClass(){
        // return the appropriate classes to be added depending on expression evaluation
        if(this.event && this.event.time === '8:00 am')
            return 'text-success bold';
        else if(this.event && this.event.time === '10:00 am')
            return 'text-danger bold';
        return '';
    }
}