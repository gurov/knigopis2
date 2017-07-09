import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    get(path: string): Observable<any> {
        return this.http.get(path, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(path, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    post(path: string, body: any): Observable<any> {
        return this.http.post(path, body, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    put(path: string, body: any): Observable<any> {
        return this.http.put(path, body, this.getRequestOptionsArgs())
            .map(data => data.text() ? data.json() : data)
            .catch(this.handleError);
    }

    getRequestOptionsArgs(): RequestOptionsArgs {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return {headers};
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
