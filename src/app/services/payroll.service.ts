import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  url = 'http://localhost:9094/api';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  headers: any = '';
  constructor(private http: HttpClient, private toastr: ToastrService) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set(
      'Authorization',
      'Bearer ' + token
    );
  }

  employeePost(data: String): Observable<any> {
    return this.http.post<any>(this.url + '/employees', data, this.options);
  }

  employeePut(id: number, data: object): Observable<any> {
    return this.http.put<any>(this.url + '/employees/' + id, data, {
      headers: this.headers,
    });
  }

  employeeDelete(id: number): Observable<any> {
    return this.http.put<any>(this.url + '/employees/delete/' + id, null, {
      headers: this.headers,
    });
  }

  employees(): Observable<any> {
    return this.http.get<any>(this.url + '/employees', {
      headers: this.headers,
    });
  }

  employee(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/employees/' + id, {
      headers: this.headers,
    });
  }

  menu(): Observable<any> {
    return this.http.get<any>(this.url + '/menu', {
      headers: this.headers,
    });
  }
}
