import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE: Movie[] = [];

export type MovieId = string;

export interface Movie {
  id: string;
	name: string;
	email: string;
	github: string;
}



const initialState: Movie[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).movies : DEFAULT_STATE;
})();

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addNewMovie: (state, action: PayloadAction<Movie>) => {
			state.push({ ...action.payload })
		},
		deleteMovieById: (state, action: PayloadAction<MovieId>) => {
			const id = action.payload;
			return state.filter((movie) => movie.id !== id);
		}
	},
});

export default moviesSlice.reducer;

export const { addNewMovie, deleteMovieById } = moviesSlice.actions;