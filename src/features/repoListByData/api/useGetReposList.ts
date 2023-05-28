import { useQuery as getQuery } from "@apollo/client/react/hooks/useQuery";

import { useAppSelector } from "app/providers/storeProvider/config/hooks";
import { getRequest } from "features/repoListByData/model/selectors/repoListSelectors";

import { CURRENT_USER_REPOS_LIST, GET_REPOS } from "./getRepos.graphql";

export const useGetResponse = () => {
	const lastRequest = sessionStorage.getItem("lastRequest") || "";
	const requestRepo = useAppSelector(getRequest);

	const { error, data, loading } = lastRequest
		? getQuery(GET_REPOS, {
				variables: {
					getQuery: `${requestRepo || lastRequest} sort:stars`,
				},
		  })
		: getQuery(CURRENT_USER_REPOS_LIST);

	const normalizedData = lastRequest ? data?.search : data?.viewer.repositories;

	return { error, loading, data: normalizedData };
};
