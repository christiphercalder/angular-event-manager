import { Injectable } from '@angular/core';

// Lets typescript know that this is a type that is valid, and is found globally
declare let toastr:any;

@Injectable()
export class ToastrService {

    constructor() { }

    success(message: string, title?: string){
        toastr.success(message, title);
    }

    info(message: string, title?: string){
        toastr.info(message, title);
    }

    error(message: string, title?: string){
        toastr.error(message, title);
    }

    warning(message: string, title?: string){
        toastr.warning(message, title);
    }
}