import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function disableAllFormFields(formGroup: FormGroup | FormArray, state: boolean = true, skipEnableFields: string[] = []) {
    //
    // Loop form
    Object.keys(formGroup.controls).forEach((field) => {
        //
        // Get control
        const control = formGroup.get(field);

        //
        // Validate control control
        if (control instanceof FormControl) {
            //
            // Mark as touched
            if (state === true) control.disable();
            else {
                //
                // Enable only if is not marked as skip
                if (!skipEnableFields.includes(field)) control.enable();
            }
        }

        //
        // Validate form group
        else if (control instanceof FormGroup || control instanceof FormArray) {
            //
            // Call the method again with the current form group
            disableAllFormFields(control, state);
        }
    });
}
