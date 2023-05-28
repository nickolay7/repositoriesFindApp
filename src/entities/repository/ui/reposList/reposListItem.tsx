import React from "react";
import { NavLink } from "react-router-dom";

import { Repository } from "entities/repository/model/types/repository";
import { stringifyDate } from "shared/lib/helpers/stringifyDate";

import styles from "./repos.module.scss";

interface ReposListItemProps {
	repo: Repository;
}

export function ReposListItem({ repo }: ReposListItemProps) {
	const {
		url,
		id,
		name,
		stargazers: { totalCount },
		defaultBranchRef,
	} = repo;

	return (
		<tr>
			<td className={styles.name}>
				<NavLink to={id}>{name}</NavLink>
			</td>
			<td className={styles.star}>{totalCount || `0`}</td>
			<td className={styles.commit}>{defaultBranchRef ? stringifyDate(defaultBranchRef.target.committedDate) : `none`}</td>
			<td className={styles.link}>
				<a href={url} target='_blank' rel='noreferrer'>
					to Github
				</a>
			</td>
		</tr>
	);
}
