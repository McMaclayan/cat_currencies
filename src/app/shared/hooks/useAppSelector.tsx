import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { TStore } from 'app/store';

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
