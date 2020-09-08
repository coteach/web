import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldComponent,
    SearchbarComponent,
    HomeComponent,
    PlanListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
