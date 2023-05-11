import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  constructor(private http: HttpClient) {

console.log('servicio persona')
  }



 getPaises(url:string){

return this.http.get(url)

 }



}
