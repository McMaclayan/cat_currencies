import { createAsyncThunk } from '@reduxjs/toolkit';

const url = process.env.API_URL ?? '';

export const fetchCurrencies = createAsyncThunk('currencies', async () => {
	const resp = await fetch(url);
	const data = await resp.json();

	return data.data;
});
