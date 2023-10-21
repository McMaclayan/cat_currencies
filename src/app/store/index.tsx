import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'app/store/reducers';

export const store = configureStore({
	reducer: rootReducer,
});

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;