import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content select="[well-body]" *ngIf="visible"></ng-content>
        </div>
    `
})

export class CollapsibleWellComponent implements OnInit {   
    visible: boolean = true;
    
    constructor() { }

    ngOnInit() { }

    /**
     * Toggles the content delivered by the ng-content tag,
     * which is placed within the components element tag
     */
    toggleContent(){
        this.visible = !this.visible;
    }
}
