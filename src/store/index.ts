import { combineSlices, configureStore, type Middleware } from "@reduxjs/toolkit"
import moviesReducer from "./movies/slice"
import movieListsReducer from "./movieLists/slice"

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};


const rootReducer = combineSlices({
	movieLists: movieListsReducer,
	movies: moviesReducer,
})


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;