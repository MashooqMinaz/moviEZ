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
  movieDetails?:Observable<Details>
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.movieDetails = this.service.getDetails(val['id'],val['show'])
    })

  }

  base_img='https://image.tmdb.org/t/p/original'
}
