import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) {
  }

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8080/message', {responseType: 'text'});
  }

  setMessage(message: string): Observable<any> {
    return this.http.put('http://localhost:8080/message', {}, {params: {message}});
  }

  resetMessage(): Observable<any> {
    return this.http.put('http://localhost:8080/reset', {});
  }
}
