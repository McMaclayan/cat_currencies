import React from 'react';

import { CAT, CURRENCIES_TERMS } from './constants';

import css from 'app/components/Title/title.module.scss';

export const Title = () => {
	return (
		<div className={css.textBlock}>
			<h1 className={css.title}>{CAT}</h1>
			<p className={css.subtitle}>{CURRENCIES_TERMS}</p>
		</div>
	);
};
