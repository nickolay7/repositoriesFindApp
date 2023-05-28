export interface Repository {
	id: string;
	name: string;
	url: string;
	stargazers: {
		totalCount: number;
	};
	defaultBranchRef: {
		target: {
			committedDate: string;
		};
	};
	owner: {
		avatarUrl: string;
		login: string;
		url: string;
	};
	languages: {
		nodes: {
			name: string;
		}[];
	};
	description: string;
}
