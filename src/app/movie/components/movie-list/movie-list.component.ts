import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    movies: Movie[];
    processing: boolean;
    endPaginate: boolean;
    page: number;

    constructor(
        private movieService: MovieService
    ) {
        this.movies = [];
        this.page = 1;
        this.processing = true;
        this.endPaginate = false;
    }

    ngOnInit() {
        this.movieService.getPopular(this.page)
            .then((res) => {
                this.inserMovies(res.data.results)
            });
    }

    @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
        if (this.processing === false && this.endPaginate === false) {
            const target = $event.target.documentElement;
            const scrollPercent = ((target.clientHeight + target.scrollTop) / target.scrollHeight) * 100;
            if (scrollPercent > 95) {
                this.page++;
                this.processing = true;
                this.movieService.getPopular(this.page).then((res) => this.inserMovies(res.data.results));
            }
        }
    }

    inserMovies(movies: Movie[]) {
        if (this.movies.length > 0) {
            this.movies.push(...movies);
        } else {
            this.movies = movies;
        }

        this.processing = false;

        if (movies.length === 0) {
            this.endPaginate = true;
        }
    }
}
