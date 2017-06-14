import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    selector: 'login',
    templateUrl: 'app/events/user/login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
    `]
})

export class LoginComponent implements OnInit {
    loginInvalid: boolean = false;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() { }

    login(formValues) {
        // console.log(formValues);
        this.auth.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events']);
            }
        });

    }

    cancel() {
        this.router.navigate(['events']);
    }
}
