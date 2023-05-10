import { searchResult } from './../../../models/search';
import { upcomingResult } from './../../../models/upcoming';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { MovieService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Result } from 'src/app/models/trending';
import { popular } from 'src/app/models/popular';



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

  TrendingMovies!: Observable<Result[]>;
  PopularMovies!: Observable<popular[]>;
  upcomingMovies!: Observable<upcomingResult[]>;
  searchedMovie!: any
searchT!:any


  base_img='https://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    // ----------trending----------
    this.TrendingMovies = this.$filter.pipe(switchMap(({time,show})=>this.service.TrendingMovie(show,time)))


    //  ------- Popular ----------
    this.PopularMovies = this.service.getPopular()

    // ---------- Upcoming ----------
    this.upcomingMovies = this.service.getUpcoming()

    // --------- Searching ----------
    this.service.$searchedMovie.subscribe(val=>{
       this.searchT = val
    })
    this.searchedMovie = this.service.searchResult(this.searchT)



  }






  // -------------------------- OWl elements ------------------------------------

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

  customOptionTwo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: [
      '<p class="text-theme-orange font-extrabold"> ◄ </p>',
      '<p class="text-theme-orange font-extrabold"> ► </p>',
    ],
    navSpeed: 600,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1.8
      },
      400: {
        items: 2.5
      },
      500: {
        items: 3
      },
      570: {
        items: 2.2
      },
      640: {
        items: 2.6
      },
      760: {
        items: 3
      },
      820:{
        items: 3.4
      },
      900:{
        items: 3.6
      },
      950: {
        items: 4
      },
      1000: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    nav: true
  }



  // --------------------------------------- SVG elments ----------------------------
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
