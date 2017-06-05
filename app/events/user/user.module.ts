import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

// Custom components
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { userRoutes } from "./user.routes";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [ProfileComponent, LoginComponent],
    providers: [],
})
export class UserModule { }

