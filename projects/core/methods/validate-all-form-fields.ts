import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function validateAllFormFields(formGroup: FormGroup | FormArray) {
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
            control.markAsTouched({ onlySelf: true });
        }

        //
        // Validate form group
        else if (control instanceof FormGroup || control instanceof FormArray) {
            //
            // Call the method again with the current form group
            validateAllFormFields(control);
        }
    });
}
