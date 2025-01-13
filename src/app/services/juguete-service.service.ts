import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete, Juguetes } from '../common/juguete';

@Injectable({
  providedIn: 'root'
})
export class JugueteServiceService {
  private readonly http: HttpClient = inject(HttpClient)
  private readonly baseURL = "https://api-juguetes.vercel.app/api/v2/juguete/"

  constructor() { }

  getJuguetes():Observable<Juguetes>{
    return this.http.get<Juguetes>(this.baseURL + "alljuguetes")
  }

  getJuguete(id: number):Observable<Juguete>{
    return this.http.get<Juguete>(this.baseURL + "juguete/" + id)
  }

  

}

export interface ApiResponseStatus{
  status: string;

}
