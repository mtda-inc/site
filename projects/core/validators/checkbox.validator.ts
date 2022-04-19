import { ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export function checkboxValidator(minRequired = 1, controls: string[] = []) {
    return function validate(form: AbstractControl): ValidationErrors | null {
        let checked = 0;

        for (const control of controls) {
            const currentControl: AbstractControl | null = form.get(control);

            if (currentControl?.value === true) {
                checked++;
            }
        }

        if (checked < minRequired) {
            return {
                requireCheckboxToBeChecked: true,
            };
        }

        return null;
    };
}
