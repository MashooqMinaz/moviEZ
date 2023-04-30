import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { MovieService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Result } from 'src/app/models/trending';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})


export class ContentComponent {
  constructor(public service: MovieService) {}


  $dayOrWeek=new BehaviorSubject<'day'|'week'>('day')
  $movieOrTv=new BehaviorSubject<'tv'|'movie'>('tv')

  $filter = combineLatest({
   time:this.$dayOrWeek,
   show:this.$movieOrTv
  })

  toggle(data:'day'|'week') {
    this.$dayOrWeek.next(data)
    console.log(this.$dayOrWeek.value)
  }

  toggle2(data:'movie'|'tv'){
      this.$movieOrTv.next(data)
  }

  TrendingMovies?: Observable<Result[]>;

  base_img='https://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    // ----------trending----------
    this.TrendingMovies = this.$filter.pipe(switchMap(({time,show})=>this.service.TrendingMovie(show,time)))


  //  -------popular----------
  // this.popular = this.service.getPopular()

  // this.service.GetDeatils()



  }
  customOptions: OwlOptions = {
    loop: true,
    navSpeed: 400,
    autoplay:true,
    dots:false,
    navText:['',''],

    nav:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }



}
