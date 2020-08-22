import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { PlanComponent } from './plan/plan.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { StarredComponent } from './starred/starred.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldComponent,
    MyPlansComponent,
    PlanComponent,
    EditorComponent,
    SearchComponent,
    StarredComponent,
    PlanListComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
