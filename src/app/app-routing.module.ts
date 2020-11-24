import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { Path } from './constant';
import { HomeComponent } from './home/home.component';
import { SearchingComponent } from './searching/searching.component';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {
    path: Path.Home,
    component: ScaffoldComponent,
    children: [
      { path: Path.Home, component: HomeComponent },
      { path: Path.Search, component: SearchingComponent },
      { path: Path.About, component: AboutComponent },
      { path: Path.Community, component: CommunityComponent },
    ]
  },
  { path: '**', redirectTo: Path.Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
