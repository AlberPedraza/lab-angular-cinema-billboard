import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesServices } from '../services/movies.services'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
    providers: [moviesServices]
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private theMovies: moviesServices) { }

  movieId: Number;

  ngOnInit() {
    this.route.params
     .subscribe((params) => this.movieId = Number(params['id']));
  }
  myMovie(id){
    console.log("esto es la funcion myMovies",this.theMovies.getMovie(id));
    return this.theMovies.getMovie(id);
  }
}
