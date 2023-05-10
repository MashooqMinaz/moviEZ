import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent {

  searchedMovies!:any
  searchedKey!:string

  constructor(private route:ActivatedRoute,private movieService:MovieService){
    route.params.subscribe(val=>{
      const key = val['searchKey'];
      this.searchedMovies  = this.movieService.searchResult(key)

      this.searchedKey = key
    })
  }

  base_img='https://image.tmdb.org/t/p/original'

  math=Math


  ratingcolor(rate:number){
    if(rate >= 70 ) return "#21d07a";
    if(rate >= 50 ) return "#d2d531";
    if(rate <= 49 ) return "#db2360";
    return "none"
  }

  ratingcolor2(rate:number){
    if(rate >= 70 ) return "#204529";
    if(rate >= 50 ) return "#423d0f";
    if(rate <= 49 ) return "#571435";
    return "none"
  }

}
