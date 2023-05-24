import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('a', {
      validators: [Validators.required, Validators.min(3)]
    }),
    password: new FormControl('a', {
      validators: [Validators.required, checkPassword]
    })
  });


  onSubmit() {
    console.log(this.loginForm.controls['password'].errors);
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}

function checkPassword(c: AbstractControl): ValidatorErrors | null {
  if (c.value.length < 5) {
    return {
      checkPassword: 'Error controle password'
    };
  }
  return null;
}

export declare type ValidatorErrors = {
  [key: string]: any;
}
