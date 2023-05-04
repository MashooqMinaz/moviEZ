import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Details } from 'src/app/models/details';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private service:MovieService){  }

  id:any
  movieDetails?:Observable<any>
  genres:any
  ngOnInit(): void {
    this.route.params.subscribe(val=>{

      this.movieDetails = this.service.getDetails(val['id'],val['show'])

      this.movieDetails.subscribe(val=>{
        this.genres = val.genres
      })

      // this.movieDetails.subscribe(val=>{
      //   console.log(val);

      // })
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
