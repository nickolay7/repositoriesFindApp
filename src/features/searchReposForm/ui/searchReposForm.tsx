import { useState } from "react";

import { useAppDispatch, useAppSelector } from "app/providers/storeProvider/config/hooks";
import { setCurrentPage, setRequestRepo } from "features/repoListByData";
import { getRequest } from "features/repoListByData/model/selectors/repoListSelectors";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { Input } from "shared/ui/input";

import styles from "./search.module.scss";

export function SearchReposForm() {
	const inputValue = useAppSelector(getRequest);
	const ssValue = sessionStorage.getItem("lastRequest");
	const [value, setValue] = useState(inputValue || ssValue || "");
	const dispatch = useAppDispatch();

	const onSearch = useDebounce((val: string) => {
		if (val === "") {
			dispatch(setCurrentPage(1));
		}
		dispatch(setRequestRepo(val));
	}, 500);

	return (
		<div className={styles.form}>
			<Input
				label={false}
				name='search'
				className={styles.form__input}
				type='search'
				id='search'
				value={value}
				placeholder='Find repository...'
				onChange={(val: string) => {
					setValue(val);
					onSearch(val);
				}}
			/>
			{/* <button className={styles.form__btn} onClick={onSearch} type='submit' aria-label='search' /> */}
		</div>
	);
}
