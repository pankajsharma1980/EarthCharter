import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NavigationService {

   constructor(private http: HttpClient) {
   }

    public getNavigationHeaderData(): Observable<any> {
        return this.http.get('assets/JSON/HighChart_JSON.json', {responseType: 'json'});
    }
    public getCountriesData(): Observable<any> {
        return this.http.get('assets/JSON/Plotly_JSON.json', {responseType: 'json'});
    }
    public getCSVData(): Observable<any> {
        return this.http.get('assets/JSON/D3_CSV_DATA.csv', { responseType: 'text' });
    }

}