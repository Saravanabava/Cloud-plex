import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HeaderComponent } from './inner-page/header/header.component';
import { SideBarComponent } from './inner-page/side-bar/side-bar.component';
import { MovieListComponent } from './inner-page/movie-list/movie-list.component';
import { InnerPageComponent } from './inner-page/inner-page/inner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HeaderComponent,
    SideBarComponent,
    MovieListComponent,
    InnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
