import { Injectable } from '@angular/core';
import { ICinema } from '../interfaces/ICinema';
import { listMovies } from '../../sample-movies';

@Injectable()
export class moviesServices implements ICinema {

  id:number;
  title:string;
  poster:string;
  synopsis:string;
  genre:Array<string>;
  year:number;
  director:string;
  actors:Array<string>;
  hour:Array<string>;
  room:number;
  listMovies:Array<ICinema>

    constructor() { }

getMovies(){
  return listMovies;
};
getMovie(id:number){
  for(let i = 0; i < listMovies.length;i++){
    if (id == listMovies[i].id){
    return [listMovies[i]];
    }
  }
};
    // increment() {
    //     this.count++;
    //     console.log(`Count is now ${this.count}`);
    // }


}
