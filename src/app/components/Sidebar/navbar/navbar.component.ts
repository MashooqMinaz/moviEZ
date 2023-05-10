import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private movieService:MovieService, private router:Router){}

  toggleValue:boolean=true

  onOpen(Data:boolean){
  this.toggleValue=!Data
  this.movieService.$toggle.next(Data)
  }

  movieName!:any

  onSubmit(){
    this.router.navigate(['/searched',this.movieName]);
  }

}
