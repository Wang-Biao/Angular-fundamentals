import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {GitSearchService} from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {RouterModule, Routes} from '@angular/router'; // routing
// we can move the routes part to app-routing.module.ts

// const appRoutes: Routes = [
//   { path: '', 
//     component: HomePageComponent 
//   },
//   { path: 'search',      
//     component: GitSearchComponent,
//     data: { 
//       title: 'Git Search' 
//     } 
//   },
//   { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // RouterModule.forRoot(
    //   appRoutes
    // )
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
