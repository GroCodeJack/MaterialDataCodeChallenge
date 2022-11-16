import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://webappietest20221110190335.azurewebsites.net/api";

  constructor(private http:HttpClient) { }

  getMatList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/materialData');
  }

  addMaterial(val:any){
    return this.http.post(this.APIUrl + '/materialData', val);
  }

  updateMaterial(val:any){
    return this.http.put(this.APIUrl + '/materialData', val);
  }

  deleteMaterial(val:any){
    return this.http.delete(this.APIUrl + '/materialData/' + val);
  }




}
