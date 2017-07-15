import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from "./book.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../services/auth.service";
import { ApiService } from "../services/api.service";
import { User } from "../models";

class MockAuthService extends AuthService {

    constructor() {
        super(null);
    }

    public getCurrentUser(): User {
        return new User();
    }
}

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BookComponent],
            providers: [{ provide: AuthService, useClass: MockAuthService }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
