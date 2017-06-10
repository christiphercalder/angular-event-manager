import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from "./jQuery.service";


@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [`
        .modal-body { min-height: 100px; max-height: 400px; overflow: auto; }
    `]
    
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    // Using the ViewChild method gives you the ability to easily access a DOM 
    // element by attaching a variable ref on the element 
    @ViewChild('modalcontainer') containerEl: ElementRef;
    
    constructor(@Inject(JQ_TOKEN) private $: any) { }
    ngOnInit() { }

    closeModal(){    
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
            this.$(this.containerEl.nativeElement).modal('hide');
        }
        
    }
}
