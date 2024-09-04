export interface Movie {
	title:  string;
	year:   string;
	id: string;
	type:   "movie" | "serie" | "episode";
	poster: string;
}

export type MovieId = string;