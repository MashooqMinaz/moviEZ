import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatRippleModule} from '@angular/material/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './components/Sidebar/navbar/navbar.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { BottunToggleComponent } from './components/Sidebar/bottun-toggle/bottun-toggle.component';
import { FollowingsComponent } from './components/Sidebar/followings/followings.component';
import { ContentComponent } from './components/Sidebar/content/content.component';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/Sidebar/details/details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchresultComponent } from './components/Sidebar/searchresult/searchresult.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BottunToggleComponent,
    FollowingsComponent,
    ContentComponent,
    DetailsComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSidenavModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
