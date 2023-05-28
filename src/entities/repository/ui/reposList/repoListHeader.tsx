import React from "react";

import styles from "./repos.module.scss";

function RepoListHeader() {
	return (
		<thead className={styles.thead}>
			<tr>
				<th className={styles.name}>Repository</th>
				<th className={styles.star}>Stars</th>
				<th className={styles.commit}>Last Commit</th>
				<th className={styles.link}>Link</th>
			</tr>
		</thead>
	);
}

export default RepoListHeader;
