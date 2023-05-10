import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/Sidebar/content/content.component';
import { DetailsComponent } from './components/Sidebar/details/details.component';
import { SearchresultComponent } from './components/Sidebar/searchresult/searchresult.component';

const routes: Routes = [
  { path: '', redirectTo:'Sidebar',pathMatch:'full'},
  { path: 'Sidebar', component: ContentComponent},
  { path: 'details/:id/:show', component: DetailsComponent},
  { path: 'searched/:searchKey', component: SearchresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
