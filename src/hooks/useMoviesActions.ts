import { addNewMovie, deleteMovieById } from "../store/movies/slice";
import { Movie, MovieId } from "../types";

import { useAppDispatch } from "./store";

export const useMoviesActions = () => {
	const dispatch = useAppDispatch();

	const addUser = (movie: Movie) => {
		dispatch(addNewMovie(movie))
	}

	const removeUser = (id: MovieId) => {
		dispatch(deleteMovieById(id));
	};

	return { addUser, removeUser };
};