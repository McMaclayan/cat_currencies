import React, { FC, useState } from 'react';
import cn from 'classnames';

import { ICurrencyItem } from 'app/store/type';

import css from 'app/components/Select/select.module.scss';

interface ISelect {
	options: ICurrencyItem[];
	currentCurrencyId: string;
	changeCurrency: (elem: ICurrencyItem) => void;
}

export const Select: FC<ISelect> = ({ options, currentCurrencyId, changeCurrency }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onChange = (id: string) =>
		changeCurrency(options.find(elem => elem.id === id) as ICurrencyItem);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className={css.select} onClick={toggle}>
			<h2 className={css.title}>{currentCurrencyId}</h2>

			{isOpen && (
				<ul className={css.optionList}>
					{options.map(({ id }) => (
						<li
							className={cn(css.option, { [css.selectedOption]: id === currentCurrencyId })}
							key={id}
							onClick={() => onChange(id)}
						>
							{id}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
