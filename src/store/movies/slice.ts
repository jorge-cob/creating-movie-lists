import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { MovieResults } from "../../types"
import { getMovies } from "../../service/movies"

const DEFAULT_STATE: MovieResults = {
	search: [],
	page: 0,
	totalPages: 0,
	totalResults: 0,
	loading: false,
	error: ''
}

const initialState = DEFAULT_STATE

export const fetchMovies = createAsyncThunk<
  Partial<MovieResults>, // Return type
  { searchText: string; page: number } // Payload type
>('movies/fetch', async ({ searchText, page }) => {
  return getMovies({ searchText, page })
})

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
				state.loading = true;
		});
		builder.addCase(fetchMovies.fulfilled, (state, {payload}) => {
				const { search, page, totalPages, totalResults } = payload
				state.loading = false
				state.search = search || []
				state.page = page || 1
				state.totalPages = totalPages || 0
				state.totalResults = totalResults || 0
		})
		builder.addCase(fetchMovies.rejected, (state, action) => {
				state.loading = false
				state.search = []
				state.error = action.error.message
		})
}
})

export default moviesSlice.reducer

export const {  } = moviesSlice.actions