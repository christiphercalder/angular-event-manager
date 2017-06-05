import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({  
  templateUrl: 'app/events/user/profile.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color:#999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-webkit-input-placeholder { color:#999; }
    .error :ms-input-placeholder { color:#999; }
  `]
})

export class ProfileComponent implements OnInit{
  profileForm:FormGroup;
  private firstName: FormControl
  private lastName: FormControl
  constructor(private auth: AuthService, private router: Router) {}
  
  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  /**
   * Save updated profile information for the user
   * @param formValues - values submitted by user
   */
  saveProfile(formValues){
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }    
  }

  /**
   * returns user to main events page when user wishes not to edit their profile
   */
  cancel(){
    this.router.navigate(['events']);
  }
}