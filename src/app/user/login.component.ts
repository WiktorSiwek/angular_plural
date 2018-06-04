import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username;
    password;
    constructor(private _authService:AuthService, private _router:Router) {}
    login(formValues) {
        this._authService.loginUser(formValues.userName, formValues.password);
        this._router.navigate(['events']);
    }

    cancel()  {
        this._router.navigate(['events'])
    }
}