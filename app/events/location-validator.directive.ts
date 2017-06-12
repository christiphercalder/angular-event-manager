import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms";

@Directive({ 
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})

/**
 * Custom validator for the location fields in create event
 */
export class LocationValidator implements Validator {
    
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        // go up a level on the DOM to access the onlineUrl control,
        // validation also needs to be restarted using the onchange method for onlineURL input
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        // check to see whether the location fields have been filled in or if
        // onlineUrl has been filled in instead
        if ((addressControl && addressControl.value &&
             cityControl && cityControl.value &&
             countryControl && countryControl.value) ||
             (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            // return object with property set to false
            return {validateLocation: false};
        }

    }
}
