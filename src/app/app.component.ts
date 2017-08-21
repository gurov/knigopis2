import { AuthService } from './services/auth.service';
import { User } from './models';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'k-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public isAuthorized: boolean = false;
    public currentUser: User;
    public year: number = (new Date()).getFullYear();

    constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
        this.authService.isAuthorized.subscribe(isAuthorized => {
            this.isAuthorized = isAuthorized;
            this.currentUser = this.authService.getCurrentUser();
            this.ref.detectChanges();
        });
    }

    exit(): void {
        this.authService.clear();
    }

}
