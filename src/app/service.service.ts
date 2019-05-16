import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpParams,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient:HttpClient) { }

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const url = "https://example.com"; // site that doesn’t send Access-Control-*
  // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  // .then(response => response.text())
  // .then(contents => console.log(contents))
  // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  baseUrl="http://localhost:56908/api/default/";
  GetEmployeeDetails():Observable<any>{
    return this._httpClient.get<any>(this.baseUrl+"GetEmployees")
  }
  
    // params = new HttpParams().set('id','1');
    // headers = new HttpHeaders().set('content-type', 'application/json'); 
  GetEmployee(id):Observable<Employee>{
    return this._httpClient.get<Employee>(this.baseUrl+"GetEmployee/"+id);
  }

  AddEmployee(e : Employee){
    this._httpClient.post<Employee>(this.baseUrl+"AddEmployee/",e);
     
  }

}
