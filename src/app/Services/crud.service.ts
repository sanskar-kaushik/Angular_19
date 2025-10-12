import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url:string = "http://localhost:3000/Users";
  constructor(private _http: HttpClient) { }
  getData(){
    return this._http.get<Iuser[]>(this.base_url);
  }
  addData(data: Iuser){
    return this._http.post(this.base_url,data);
  }
  getDataById(id: number){
    return this._http.get<Iuser[]>(`${this.base_url}/${id}`);
  }
  postDataById(id: number , data: Iuser){
    return this._http.put(`${this.base_url}/${id}`,data)
  }
  deleteDataById(id: number){
    return this._http.delete(`${this.base_url}/${id}`);
  }
}
