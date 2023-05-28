import { useAppDispatch, useAppSelector } from "app/providers/storeProvider/config/hooks";
import { ReposList } from "entities/repository";
import { setCurrentPage } from "features/repoListByData";
import { useGetResponse } from "features/repoListByData/api/useGetReposList";
import { getPage } from "features/repoListByData/model/selectors/repoListSelectors";
import { getRepoByPages } from "shared/lib/helpers/getRepoByPages";
import { Pagination } from "shared/ui/pagination";

import styles from "./reposList.module.scss";

export function RepoListByData() {
	const currentPage = useAppSelector(getPage);
	const { loading, data, error } = useGetResponse();
	const dispatch = useAppDispatch();
	const setPage = (page: number) => dispatch(setCurrentPage(page));

	const pages = data && getRepoByPages(data.nodes, data.repositoryCount);

	if (error) {
		return <h2 className={styles.h2_error}>{error.message}</h2>;
	}

	return loading ? (
		<h3 className={styles.h3}>Loading...</h3>
	) : (
		<>
			<ReposList repos={pages.repos[currentPage - 1]} />
			{pages.count > 1 && <Pagination pages={pages.count} currentPage={currentPage} setPage={setPage} />}
		</>
	);
}
