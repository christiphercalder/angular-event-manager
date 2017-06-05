import { Component, OnInit } from '@angular/core';

import { AuthService } from "../events/user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px; }
        #searchForm { margin-right: 100px; }
        li > a.active { color: #F97924; }
        @media (max-width: 1024px) { #searchForm { display: none; } }
    `]
})

export class NavBarComponent implements OnInit {
    constructor(private auth:AuthService) { }

    ngOnInit() { }
}