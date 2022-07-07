import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LiveSearchService {
  
constructor(private http: HttpClient) { }

  public getNavigationHeaderData(): Observable<any> {
    return this.http.get('assets/json/data.json', {responseType: 'json'});
}
  public getCountriesData(): Observable<any> {
    return this.http.get('assets/json/config.json', {responseType: 'json'});
}
public getCountriesChart1(): Observable<any> {

  return this.http.get('assets/json/Chart1.json', {responseType: 'json'});

}

public getCountriesChart2(): Observable<any> {

  return this.http.get('assets/json/Chart2.json', {responseType: 'json'});

}

public getCountriesChart3(): Observable<any> {

  return this.http.get('assets/json/Chart3.json', {responseType: 'json'});

}

public getCountriesChart4(): Observable<any> {

  return this.http.get('assets/json/Chart4.json', {responseType: 'json'});

}

public getCountriesChart5(): Observable<any> {

  return this.http.get('assets/json/Chart5.json', {responseType: 'json'});

}

public getCountriesChart6(): Observable<any> {

  return this.http.get('assets/json/Chart6.json', {responseType: 'json'});

}

public getCountriesChart7(): Observable<any> {

  return this.http.get('assets/json/Chart7.json', {responseType: 'json'});

}

public getMenuItemList(): Observable<any> {

  return this.http.get('assets/json/nav.json', {responseType: 'json'});

}

public getCardList(): Observable<any> {

  return this.http.get('assets/json/card.json', {responseType: 'json'});

}
 
}