import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ReposSchema } from "features/repoListByData/model/types/reposSchema";

const lastPage = sessionStorage.getItem("lastPage") || 1;

const initialState: ReposSchema = {
	requestRepo: "",
	currentPage: Number(lastPage),
};

export const repoListSlice = createSlice({
	name: "@@repoList",
	initialState,
	reducers: {
		setRequestRepo: (state, action: PayloadAction<string>) => {
			state.requestRepo = action.payload;
			sessionStorage.setItem("lastRequest", action.payload);
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
			sessionStorage.setItem("lastPage", String(action.payload));
		},
	},
});

export const { setRequestRepo, setCurrentPage } = repoListSlice.actions;

export const reposReducer = repoListSlice.reducer;
