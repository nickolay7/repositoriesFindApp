import { gql } from "@apollo/client";

export const REPOS_LIST_BY_LOGIN = gql`
	query ($login: String!) {
		user(login: $login) {
			repositories(first: 100) {
				nodes {
					id
					name
					url
					stargazers {
						totalCount
					}
					defaultBranchRef {
						target {
							... on Commit {
								committedDate
							}
						}
					}
				}
			}
		}
	}
`;

export const CURRENT_USER_REPOS_LIST = gql`
	query {
		viewer {
			repositories(first: 100) {
				nodes {
					id
					name
					url
					stargazers {
						totalCount
					}
					defaultBranchRef {
						target {
							... on Commit {
								committedDate
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_REPOS = gql`
	query GetRepos($getQuery: String!) {
		search(query: $getQuery, type: REPOSITORY, first: 100) {
			repositoryCount
			nodes {
				... on Repository {
					id
					name
					url
					stargazers {
						totalCount
					}
					defaultBranchRef {
						target {
							... on Commit {
								committedDate
							}
						}
					}
				}
			}
		}
	}
`;
