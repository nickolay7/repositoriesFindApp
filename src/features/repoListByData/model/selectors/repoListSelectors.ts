import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getRequest = (state: StateSchema) => state.repos.requestRepo;
export const getPage = (state: StateSchema) => state.repos.currentPage;
