import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  sideNavOpened!:boolean
  constructor(private movieService:MovieService){}
  ngOnInit(): void {
    this.movieService.$toggle.subscribe({
      next:(data)=>{
      this.sideNavOpened=data
      }
    })
  }
}
