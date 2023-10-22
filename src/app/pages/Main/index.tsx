import React, { useEffect, useState } from 'react';

import { useAppDispatch } from 'app/shared/hooks/useAppDispatch';
import { useAppSelector } from 'app/shared/hooks/useAppSelector';

import { Title } from 'app/components/Title';
import { Select } from 'app/components/Select';

import { getCurrencies } from 'app/store/selectors';
import { fetchCurrencies } from 'app/store/thunks/fetchCurrencies';
import { ICurrencyItem } from 'app/store/type';

import css from 'app/pages/Main/main.module.scss';

export const Main = () => {
	const dispatch = useAppDispatch();
	const { currencies } = useAppSelector(getCurrencies);
	const [selectedValue, setSelectedValue] = useState<ICurrencyItem | null>(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		dispatch(fetchCurrencies())
			.then(resp => setSelectedValue(resp.payload[0]))
			.catch(() => setIsError(true));
	}, []);

	if (isError) return <div>Oops... something went wrong</div>;

	if (currencies.length === 0) return <div>Loading...</div>;

	return (
		<>
			{selectedValue && (
				<div className={css.root}>
					<div className={css.selectBlock}>
						<div className={css.titleBlock}>
							<Title />

							<Select
								options={currencies}
								changeCurrency={setSelectedValue}
								currentCurrencyId={selectedValue.id}
							/>
						</div>

						<div className={css.imgBlock} />
					</div>

					<div className={css.textBlock}>
						<p className={css.text}>{selectedValue.name}</p>
					</div>
				</div>
			)}
		</>
	);
};
