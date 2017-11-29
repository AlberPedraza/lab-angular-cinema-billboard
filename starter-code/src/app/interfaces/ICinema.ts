export interface ICinema{
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

getMovies(): Array<Object>;
getMovies(id:number):Object;
}
