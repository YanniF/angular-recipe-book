import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null

  constructor(private authService: AuthService) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }

    this.isLoading = true

    const { email, password } = form.value
    let authObs: Observable<AuthResponseData>

    if(this.isLoginMode) {
      authObs = this.authService.login(email, password)
    }
    else {
      authObs = this.authService.signUp(email, password)
    }

    authObs.subscribe(resp => {
        this.isLoading = false
      },
      errorMessage => {
        console.error(errorMessage)
        this.error = errorMessage
        this.isLoading = false
      })

    form.reset()
  }
}
