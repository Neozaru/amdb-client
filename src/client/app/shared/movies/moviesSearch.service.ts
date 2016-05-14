import { MoviesDatabaseService } from './moviesDatabase.service'; 

import { Inject } from '@angular/core';

export class MoviesSearchService {

  constructor(@Inject(MoviesDatabaseService) private moviesDatabaseService: MoviesDatabaseService) {
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

    var movies = this.moviesDatabaseService.retrieveAllMovies();
    
    var foundMovies = this.searchMoviesByKeyword(movies, keyword);


    var sortedMoves = sortByField ? _.sortBy(foundMovies, sortByField) : foundMovies;

    return _.first(sortedMoves, limit);
  }

}