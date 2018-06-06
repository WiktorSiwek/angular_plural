import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924 }
    `]
})

export class NavBarComponent {
    searchTerm: string = '';
    foundSessions: ISession[];

    constructor(
        private _authService: AuthService,
        private _eventService: EventService
    ) {}

    searchSessions(searchTerm) {
        this._eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}
