import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencies } from 'app/store/thunks/fetchCurrencies';

import { ICurrencyItem } from 'app/store/type';

interface ICurrenciesState {
	currencies: ICurrencyItem[];
}

const initialState: ICurrenciesState = {
	currencies: [],
};

const currenciesSlice = createSlice({
	name: 'currenciesList',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
			state.currencies = action.payload;
		});
	},
});

export default currenciesSlice.reducer;
