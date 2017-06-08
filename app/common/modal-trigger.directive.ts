import { Directive, Input, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    // HTMLElement is a global javascript type, no import required
    private el: HTMLElement; 
    @Input('modal-trigger') modalId: string;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }
    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        })
    }
}
