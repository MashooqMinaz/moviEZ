import { Result } from './../models/trending';
import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Trending } from '../models/trending';
import { PopularMovies, popular } from '../models/popular';
import { Details } from '../models/details';
import { upcoming , upcomingResult  } from '../models/upcoming';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  base_url = 'https://api.themoviedb.org/3';
  api_key = 'b758c069835d80a48cbf9219d08a1282';


  constructor(private http: HttpClient) { }

    // ------------trending------------


    TrendingMovie(show:'tv'|'movie',time:'week'|'day'): Observable<Result[]> {
      return this.http.get<Trending>(`${this.base_url}/trending/${show}/${time}`, {
        params: {
          api_key: this.api_key
        }
      }).pipe(map((res) =>{
        return res.results } ))
    }


    // --------------popular--------------

    getPopular(): Observable<popular[]> {
      return this.http.get<PopularMovies>(`${this.base_url}/movie/popular`, {
        params: {
          api_key: this.api_key
        }
      }). pipe(map((res) => {
        return res.results
      }))
    }

    // ---------------------- Upcoming ----------------

    getUpcoming(): Observable<upcomingResult[]> {
      return this.http.get<upcoming>(`${this.base_url}/movie/upcoming`, {
        params: {
          api_key: this.api_key
        }
      }). pipe(map((res) => {
        return res.results
      }))
    }


    // ---------------------- details ----------------

    getDetails(id:number,MoT:any): Observable<Details>{
      return this.http.get<Details>(`${this.base_url}/${MoT}/${id}`,{
        params:{
          api_key: this.api_key
        }
      }).pipe(map((res)=> {
        return res
      }))
    }

}




