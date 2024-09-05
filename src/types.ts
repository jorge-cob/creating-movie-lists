export interface Movie {
	title:  string;
	year:   string;
	id: string;
	type:   "movie" | "serie" | "episode";
	poster: string;
}

export type MovieId = string;

export type MovieListId = string;

export interface MovieList {
	name: string;
	movies: Movie[];
}

export interface MovieListWithId extends MovieList {
	id: MovieListId;
}

export interface MovieResults {
	search: Movie[];
	page: number;
	totalPages: number;
	totalResults: number;
	loading: boolean;
	error?: string;
}