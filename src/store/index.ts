import { configureStore, type Middleware } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};


export const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;