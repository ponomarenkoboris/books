import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStore } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector