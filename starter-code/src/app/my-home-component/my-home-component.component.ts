import { Component, OnInit } from '@angular/core';
import { moviesServices } from '../services/movies.services'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [moviesServices]
})
export class MyHomeComponentComponent implements OnInit {


  constructor(private theMovies: moviesServices) { }

  ngOnInit() {
  }
  myHomeGetMovies(){
    console.log(this.theMovies.getMovies());
    return this.theMovies.getMovies();
  }
}
