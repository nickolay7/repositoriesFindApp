import { ReactElement } from "react";

import { Repository } from "../../model/types/repository";
import RepoListHeader from "./repoListHeader";
import styles from "./repos.module.scss";
import { ReposListItem } from "./reposListItem";

interface ReposListProps {
	repos: Repository[];
}

export function ReposList({ repos }: ReposListProps): ReactElement {
	return (
		<table className={styles.table}>
			<RepoListHeader />
			<tbody className={styles.tbody}>
				{repos?.map(repo => (
					<ReposListItem key={repo.url} repo={repo} />
				))}
			</tbody>
		</table>
	);
}
