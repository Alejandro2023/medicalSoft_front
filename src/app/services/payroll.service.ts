import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  url = 'http://localhost:9094/api';
  constructor(private http: HttpClient) {}

  employeePost(data: String): Observable<any> {
    return this.http.post<any>(this.url + '/employees', data);
  }

  employeePut(id: number, data: object): Observable<any> {
    return this.http.put<any>(this.url + '/employees/' + id, data);
  }

  employeeDelete(id: number): Observable<any> {
    return this.http.put<any>(this.url + '/employees/delete/' + id, null);
  }

  employees(): Observable<any> {
    return this.http.get<any>(this.url + '/employees');
  }

  employee(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/employees/' + id);
  }

  menu(): Observable<any> {
    return this.http.get<any>(this.url + '/menu');
  }
}
