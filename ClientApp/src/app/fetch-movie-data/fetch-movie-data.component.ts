import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-movie-data',
  templateUrl: './fetch-movie-data.component.html',
})
export class FetchMovieDataComponent {
  public movies: Movie[] = [];
  sortingOptions = ['id', 'popularity (increasing)', 'popularity (decreasing)',
  'budget (increasing)', 'budget (decreasing)', 'revenue (increasing)',
  'revenue (decreasing)', 'alphabetical (a-z)', 'alphabetical (z-a)',
  'release year (increasing)', 'release year (decreasing)'];
  private currentSortingIndex: number = 0;
  currentSorting = this.sortingOptions[this.currentSortingIndex];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
  titleSearch: string = "";

  // Start search by title
  get filteredMoviesByTitle(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie => 
      movie.originalTitle && 
      movie.originalTitle.toLowerCase().includes(this.titleSearch.toLowerCase())
    );
  }

  cycleSorting(): void {
    this.currentSortingIndex = (this.currentSortingIndex + 1) % this.sortingOptions.length;
    this.currentSorting = this.sortingOptions[this.currentSortingIndex];
    this.sortMovies();
  }
  sortMovies(): void {
    let sortedMovies!: Movie[];
    switch (this.currentSorting) {
      case 'id':
        sortedMovies = this.movies.sort((a, b) => a.id - b.id);
        break;
      case 'popularity (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'popularity (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'budget (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.budget - b.budget);
        break;
      case 'budget (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.budget - a.budget);
        break;
      case 'revenue (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.revenue - b.revenue);
        break;
      case 'revenue (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.revenue - a.revenue);
        break;
      case 'alphabetical (a-z)':
        sortedMovies = this.movies.sort((a, b) => a.originalTitle.localeCompare(b.originalTitle));
        break;
      case 'alphabetical (z-a)':
        sortedMovies = this.movies.sort((a, b) => b.originalTitle.localeCompare(a.originalTitle));
        break;
      case 'release year (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case 'release year (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
    }
    this.movies = sortedMovies;
  }
}


// Set movie interface
interface Movie {
  id: number;
  imdbId: string;
  popularity: number;
  budget: number;
  revenue: number;
  originalTitle: string;
  cast: string[];
  homepage: string;
  director: string;
  tagline: string;
  keywords: string[];
  overview: string;
  runtime: number;
  genres: string[];
  productionCompanies: string[];
  releaseDate: string;
  voteCount: number;
  voteAverage: number;
  releaseYear: number;
  budgetAdjusted: number;
  revenueAdjusted: number;
}

