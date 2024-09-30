import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieId, MovieListId, MovieList, MovieListWithId } from "../../types";

const DEFAULT_STATE: MovieListWithId[] = [];


const initialState: MovieListWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).movieLists : DEFAULT_STATE;
})();

export const movieListsSlice = createSlice({
	name: "movieLists",
	initialState,
	reducers: {
		createNewList: (state, action: PayloadAction<MovieList>) => {
			const id = crypto.randomUUID()
			state.push({ id, ...action.payload })
		},
		deleteListById: (state, action: PayloadAction<MovieListId>) => {
			const id = action.payload;
			return state.filter((movieList) => movieList.id !== id);
		},
		addNewMovieToList: (state, action: PayloadAction<{ movieToAdd: Movie; listId: MovieListId }>) => {
			const { movieToAdd, listId } = action.payload;

			return state.forEach((movieList) => {
				if (movieList.id === listId && !movieList.movies.find((movie) => movie.id === movieToAdd.id)) {
					movieList.movies.push(movieToAdd)
				}
			})

		},
		deleteMovieFromListById: (state, action: PayloadAction<{ movieId: MovieId; listId: MovieListId }>) => {
			const { movieId, listId } = action.payload;
			return state.forEach((movieList) => {
				if (movieList.id === listId) {
					movieList.movies = movieList.movies.filter((movie) => movie.id !== movieId)
				}
			})
		}
	},
});

export default movieListsSlice.reducer;

export const { createNewList, deleteListById, addNewMovieToList, deleteMovieFromListById } = movieListsSlice.actions;