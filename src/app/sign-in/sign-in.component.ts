import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService } from '../api/authentication.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  emailCheck = new FormControl('', [Validators.required, Validators.email]);
  passwordCheck = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.emailCheck.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.passwordCheck.hasError('required')){
      return 'Password required';
    }
    return this.emailCheck.hasError('email') ? 'Not a valid email' : '';
  }

  matcher = new MyErrorStateMatcher();

  constructor(public authenticationService: AuthenticationService) {}

  async newAccount(email : string | null, password : string | null, confirmPassword : string | null){
    if (password === confirmPassword)
      var token = this.authenticationService.SignUp(email, password);
    // const osecour = document.getElementById("USERNAME");
    // if (osecour && auth.currentUser?.email) osecour.innerText = auth.currentUser?.email;
  }
}
