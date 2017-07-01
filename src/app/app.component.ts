import {AuthService} from './services/auth.service';
import {User} from './models';
import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isAuthorized: boolean = false;
  private currentUser: User;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.authService.setAuthHook();
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
