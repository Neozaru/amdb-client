// import { _ } from 

export class MoviesSearchService {

  constructor() {
    console.warn("tsssest");
    window["foo"] = this;
  }


  private textContainsKeyword(text: string, keyword: string) {
    return text && keyword && text.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  }

  private searchMoviesByKeyword(movies: any[], keyword: string) {
    return _.filter(movies, (movie: any) => {
      return this.textContainsKeyword(movie.title, keyword) || this.textContainsKeyword(movie.plot, keyword); 
    });
  }

  search(keyword: string, limit: number = 20, sortByField?: string): any[] {

    movies = _.filter(movies, (movie: any) => !movie.failed && movie.title)
    var foundMovies = this.searchMoviesByKeyword(movies, keyword);


    var sortedMoves = sortByField ? _.sortBy(foundMovies, sortByField) : foundMovies;

    return _.first(sortedMoves, limit);
  }

}