import {Observable} from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  
  constructor(private http: HttpClient) {}
    getcoviddata():Observable<any>{
    const url = "https://api.covid19india.org/v3/min/data.min.json";
    return this.http.get<any>(url);
  }
}
