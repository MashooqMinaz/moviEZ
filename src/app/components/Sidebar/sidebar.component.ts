import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sideNavOpened:boolean = true;

  // sideNavToggle(){
  //   this.sideNavOpened = !this.sideNavOpened
  // }
}
