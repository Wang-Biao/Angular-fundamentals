import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitSearchComponent } from './git-search/git-search.component';



const appRoutes: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  // {
  //   path: 'search',
  //   component: GitSearchComponent,
  //   data: {
  //     title: 'Git Search'
  //   }
  // },

  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },

  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: { title: 'Git Search' }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
