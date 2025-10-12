import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private _http: HttpClient) { 
  }

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  user = {
    name: "Sanskar",
    userName: "sanskar_3901",
    number: "7011232453",
    subscription: "basic",
    email: "sanskar.kaushik34@gmail.com"
  }
  isEligible(){
    if(this.user.subscription === 'basic' && this.user.email.endsWith("@gmail.com")){
      return true;
    }
    return false;
  }
  apiData(){
    return this._http.get(this.apiUrl);
  }
}
