import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { User } from "../models";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'k-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent {
    @ViewChild('editBookForm') form: NgForm;

    public user: User = new User();

    constructor(private authService: AuthService,
        private userService: UserService,
        private router: Router) {
        this.userService.getCurrentUser().subscribe(user => this.user = user);
    }
    saveAndClose() {
        this.userService.saveUser(this.user)
            .subscribe(user => {
                this.authService.setCurrentUser(user);
                this.router.navigate(['/', user.nickname, 'books'], { queryParams: { u: user.id } });
            });
    }

}
