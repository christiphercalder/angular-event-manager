import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    template: `
        <div class="voting-widget-container pointable" (click)="onClick()">
            <div class="well voting-widget">
                <div class="voting-button">                    
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColour"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `
    // templateUrl: 'upvote.component.html'
})

export class UpvoteComponent implements OnInit {
    // PROPERTIES
    @Input() count: number;
    // using an input setter to toggle the colour based on voting status
    @Input() set voted(val){
        this.iconColour = val ? 'red': 'white';
    }
    @Output() vote = new EventEmitter();
    iconColour: string;

    // FUNCTIONS
    constructor() { }

    ngOnInit() { }

    onClick(){
        this.vote.emit({});
    }
}
