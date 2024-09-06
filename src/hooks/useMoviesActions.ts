import { fetchMovies } from "../store/movies/slice"

import { useAppDispatch } from "./store"

export const useMoviesActions = () => {
	const dispatch = useAppDispatch()

	const searchMovies = ({ searchText = '', page = 1 } ) => {
		dispatch(fetchMovies( { searchText, page } ))
	}

	return { searchMovies }
};