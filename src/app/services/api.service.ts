import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from "../../environments/environment";



@Injectable()
export class ApiService {

    private API = '';

    constructor(private http: Http) {

        if (environment.production) {
            this.API = 'http://api.knigopis.com';
        }

    }

    get(path: string): Observable<any> {
        return this.http.get(this.API + path, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(this.API + path, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    post(path: string, body: any): Observable<any> {
        return this.http.post(this.API + path, body, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    put(path: string, body: any): Observable<any> {
        return this.http.put(this.API + path, body, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    getRequestOptionsArgs(): RequestOptionsArgs {
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return { headers };
    }

    handleError(error: Response | any) {
        let errMsg: string = '';

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message || error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
