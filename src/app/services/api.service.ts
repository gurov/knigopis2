import { List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    get(path: string): Observable<List<any>> {
        return this.http.get(path)
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError)
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