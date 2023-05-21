import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Berry } from "../models/berry.model";
import { Observable , map } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  array : string[] = [];

  getBerries()  {
    return  this.http.get('https://pokeapi.co/api/v2/berry/?sort_by=id');
  }

  getDetails(name: string) : Observable<Berry> {
    return this.http.get<Berry>(`https://pokeapi.co/api/v2/berry/${name}`).pipe(
      map((response => ({
        name: response.name,
        id : response.id,
        size: response.size,
        smoothness: response.smoothness,
        max_harvest: response.max_harvest,
        growth_time: response.growth_time
        }))
      ));
  }
}
