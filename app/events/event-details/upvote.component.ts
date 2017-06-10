import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    template: `
        <div class="voting-widget-container pointable" (click)="onClick()">
            <div class="well voting-widget">
                <div class="voting-button">
                    <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                    <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
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
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();


    // FUNCTIONS
    constructor() { }

    ngOnInit() { }

    onClick(){
        this.vote.emit({});
    }
}
