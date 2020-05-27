import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from './partner';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class PartnerService {

    constructor(private http:HttpClient) { }

    getPartners(): Observable<Partner[]> {
        let ob = this.http
            .get<Partner[]>('http://localhost:3000/partners', { headers: this.createRequestHeaders() })
            .pipe(retry(1));
        return ob;
    }

    addPartner(partner:Partner):Observable<Partner> {
        return this.http
            .post<Partner>('http://localhost:3000/partners', partner, { headers: this.createRequestHeaders() })
            .pipe();
    }

    private createRequestHeaders():HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }

}
