import React from "react";
import { NavLink } from "react-router-dom";

import { stringifyDate } from "shared/lib/helpers/stringifyDate";

import { Repository } from "../../model/types/repository";
import styles from "./card.module.scss";

export interface RepoCardProps {
	repo: Repository;
}

export function RepoCard({ repo }: RepoCardProps) {
	const {
		url,
		name,
		stargazers: { totalCount },
		defaultBranchRef,
		owner: { url: ownerUrl, login, avatarUrl },
		description,
		languages,
	} = repo;

	return (
		<article className={styles.article}>
			<h1 className={styles.h1}>
				<a href={url}>{name}</a>
			</h1>
			<small>Stars - {totalCount}</small>
			<br />
			<small>Last commit - {stringifyDate(defaultBranchRef?.target.committedDate)}</small>
			<br />
			<small>
				Author -{" "}
				<a className={styles.name} href={ownerUrl}>
					{login}
				</a>
			</small>

			<div className={styles.face}>
				<img src={avatarUrl} alt='repo pic' />
			</div>

			<p className={styles.description}>{description}</p>

			{!!languages.nodes.length && (
				<ul className={styles.language}>
					Used languages:
					{languages.nodes.map((language: Record<string, any>) => (
						<li key={language.name}>{language.name}</li>
					))}
				</ul>
			)}

			<NavLink className={styles.back} to='/'>
				back to search
			</NavLink>
		</article>
	);
}
