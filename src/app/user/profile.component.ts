import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup

  constructor(private _authService:AuthService, private _router:Router) {}

      ngOnInit() {
        let firstName = new FormControl(this._authService.currentUser.firstName);
        let lastName = new FormControl(this._authService.currentUser.lastName);
        this.profileForm = new FormGroup({
          firstName,
          lastName
        })
      }

      cancel() {
        this._router.navigate(['/events'])
      }

      saveProfile(formValues) {
        this._authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        this._router.navigate(['/events'])
      }
}