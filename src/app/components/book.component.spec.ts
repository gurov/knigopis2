import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from "./book.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { ApiService } from "../services/api.service";
import { Http, ConnectionBackend, RequestOptions } from "@angular/http";


describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BookComponent],
            providers: [AuthService, UserService, ApiService, Http, ConnectionBackend, RequestOptions]
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
