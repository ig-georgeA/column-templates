import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeInputModel } from './ignorthwind-model';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class IGNorthwindService {
  constructor(
    private http: HttpClient
  ) { }

  public getEmployeeInputModel(): Observable<EmployeeInputModel> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<EmployeeInputModel>(`${API_ENDPOINT}/Employee`, options);
  }
}
