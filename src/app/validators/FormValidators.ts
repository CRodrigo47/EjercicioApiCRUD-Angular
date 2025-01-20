import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidator{
    static notOnlyWhiteSpace(control: FormControl): ValidationErrors | null{
        if((control.value != null) && (control.value.trim().length === 0)){
            return {notOnlyWhiteSpace: true}
        }else{
            return null
        }
    }

    static forbiddenNameValidator(nameRe: RegExp): ValidatorFn{
        return (control:AbstractControl): ValidationErrors | null => {
            const forbidden = nameRe.test(control.value)
            return forbidden ? {forbiddenName: true}: null
        }
    }
}