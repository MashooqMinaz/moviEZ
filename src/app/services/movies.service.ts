import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, map } from 'rxjs';
import { movieResponse, movie, movieDetails } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  base_url = 'https://api.themoviedb.org/3';
  api_key = 'b758c069835d80a48cbf9219d08a1282';


  constructor(private http: HttpClient) { }

  // trending
  getTime(category:'tv'|'movie',time: 'day' | 'week'): Observable<movie[]> {
    return this.http
      .get<movieResponse>(`${this.base_url}/trending/${category}/${time}`, {
        params: {
          api_key: this.api_key,
        }
      })
      .pipe(
        map((res) => res.results )
      );
  }


  // getCategory(category:'tv'|'movie'):Observable<movie[]> {
  //   return this.http.get<movieResponse>(`${this.base_url}/${category}/popular`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   }).pipe(map(res => res.results))
  // }

  // getSearchMovies(searchKey:string ){
  //   return this.http.get<movieResponse>(`${this.base_url}/search/movie`, {
  //     params: {
  //       api_key: this.api_key,
  //       query:searchKey
  //     }
  //   }).pipe(map(res => res.results))

  // }

  // getMovieDetails(movie_id:number){
  //   return this.http.get<movieDetails>(`${this.base_url}/movie/${movie_id}`, {
  //     params: {
  //       api_key:this.api_key,
  //     }
  //   })
  // }

  // getSimilarMovies(movie_id:number){
  //   return this.http.get<movieResponse>(`${this.base_url}/movie/${movie_id}/similar`, {
  //     params: {
  //       api_key:this.api_key,
  //     }
  //   }).pipe(map(res=>res.results))
  // }

  // getReviews(movie_id:number){
  //   return this.http.get<movieResponse>(`${this.base_url}/movie/${movie_id}/reviews`, {
  //     params: {
  //       api_key:this.api_key,
  //     }
  //   }).pipe(map(res=>res.results))
  // }
}




