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
public getCountriesData1(): Observable<any> {

  return this.http.get('assets/json/Latest.json', {responseType: 'json'});

}

public getCountriesData11(): Observable<any> {

  return this.http.get('assets/json/Latest1.json', {responseType: 'json'});

}

public getCountriesData111(): Observable<any> {

  return this.http.get('assets/json/graph.json', {responseType: 'json'});

}

public getMenuItemList(): Observable<any> {

  return this.http.get('assets/json/nav.json', {responseType: 'json'});

}

public getCardList(): Observable<any> {

  return this.http.get('assets/json/card.json', {responseType: 'json'});

}
 
}