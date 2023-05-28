import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import { useQuery as getQuery } from "@apollo/client";

import { RepoCard } from "entities/repository/ui/repoCard/repoCard";

import { GET_INFO } from "./card.graphql";
import * as styles from "./card.module.css";

export function Card(): ReactElement {
	const { id } = useParams();
	const { loading, error, data } = getQuery<Record<string, any>>(GET_INFO, {
		variables: {
			getId: `${id}`,
		},
	});

	if (error) {
		return <h2 className={styles.h2_error}>{error.message}</h2>;
	}

	if (loading) {
		return <h3 className={styles.h3}>Loading...</h3>;
	}

	return data ? <RepoCard repo={data.node} /> : <h2 className={styles.h2_error}>Could not resolve to a node</h2>;
}
