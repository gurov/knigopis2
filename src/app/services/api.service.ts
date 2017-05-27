import { List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    get(path: string): Observable<List<any>> {
        let headers = new Headers();
        this.setAuthorization(headers);
        return this.http.get(path, { headers })
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError)
    }

    post(path: string, body: any): Observable<any> {
        return this.http.post(path, body)
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError)
    }

    put(path: string, body: any): Observable<any> {
        let headers = new Headers();
        this.setAuthorization(headers);
        return this.http.put(path, body, { headers })
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError)
    }

    setAuthorization(headers: Headers): void {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
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
