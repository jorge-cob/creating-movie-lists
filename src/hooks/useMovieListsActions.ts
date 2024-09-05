import { createNewList, deleteListById, addNewMovieToList, deleteMovieFromListById } from "../store/movieLists/slice";
import { Movie, MovieId, MovieListId } from "../types";

import { useAppDispatch } from "./store";

export const useMovieListsActions = () => {
	const dispatch = useAppDispatch();

	const addMovieToList = (movie: Movie, listId: MovieListId) => {
		dispatch(addNewMovieToList({ movieToAdd: movie, listId: listId }));
	}

	const removeMovieFromList = ( movieId: MovieId, listId: MovieListId) => {
		dispatch(deleteMovieFromListById( { movieId: movieId, listId: listId }));
	};


	return { addMovieToList, removeMovieFromList };
};