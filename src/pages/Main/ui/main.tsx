import { ReactElement } from "react";

import { RepoListByData } from "features/repoListByData/ui/repoListByData";
import { SearchReposForm } from "features/searchReposForm";

export function Main(): ReactElement {
	return (
		<>
			<SearchReposForm />
			<RepoListByData />
		</>
	);
}
