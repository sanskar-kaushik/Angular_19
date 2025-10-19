import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceApiService {

  baseUrl = "https://fake-store-api.mock.beeceptor.com"

  constructor(private _http: HttpClient) { }

  rxResourceData = rxResource({
    loader: ()=> this._http.get(`${this.baseUrl}/api/users`)
  })
  resourceData = resource({
    loader: ()=> fetch(`${this.baseUrl}/api/users`).then(res => res.json() as Promise<any>)
  })
}
