import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/components/movie-list/movie-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './movie/components/movie-card/movie-card.component';
import { MovieService } from './movie/services/movie.service';

@NgModule({
    declarations: [
        AppComponent,
        MovieListComponent,
        MovieCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
