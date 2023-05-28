import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { reposReducer } from "features/repoListByData/model/slice/repoListSlice";

import { StateSchema } from "./stateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		repos: reposReducer,
	};

	return configureStore({
		reducer: rootReducer,
		devTools: true,
		preloadedState: initialState,
	});
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
