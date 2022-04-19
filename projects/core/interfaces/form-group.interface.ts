import { FormControl, FormGroup } from '@angular/forms';
export interface CustomFormGroup {
    [propName: string]: FormControl | FormGroup | any;
}
