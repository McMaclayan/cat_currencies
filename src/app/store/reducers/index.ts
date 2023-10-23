import { combineReducers } from '@reduxjs/toolkit';

import currenciesReducer from 'app/store/reducers/currenciesSlice';

export const rootReducer = combineReducers({
	currencies: currenciesReducer,
});

