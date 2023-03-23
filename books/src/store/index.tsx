import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fetchBooks } from './books/actionCreators';
import bookReducer, { openBook } from "./books/bookSlice";

const rootReducer = combineReducers({
    bookReducer
})

const store = configureStore({
    reducer: rootReducer
})

export const allActionCreators = () => {
    return {
        fetchBooks,
        openBook
    }
}

export default store

export type RootStore = ReturnType<typeof rootReducer>
export type AppDispatch = () => typeof store.dispatch