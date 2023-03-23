import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RejectedPayload, ReturnedPayload } from '../../models/search.model'
import { BookState, Book } from '../../models/state.model'
import { fetchBooks } from './actionCreators'


const initialState: BookState = {
    loading: false,
    totalCount: 0,
    preview: null,
    error: null,
    books: [],
    searchParameters: {
        searchValue: '',
        category: '',
        startIndex: 0,
        orderBy: ''
    }
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        openBook: (state: BookState, action: PayloadAction<Book['volumeInfo'] | null>) => {
            state.preview = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (state: BookState, action: PayloadAction<ReturnedPayload>) => {
                
                if (!action.payload?.books || !action.payload?.parameters) return

                if (!action.payload.parameters.startIndex) {
                    state.books = action.payload.books
                    state.totalCount = action.payload.totalCount
                    state.preview = null
                } else {
                    state.books = state.books.concat(action.payload.books)
                }

                state.searchParameters = action.payload.parameters
                state.loading = false
            })
            .addCase(fetchBooks.rejected, (state: BookState, { payload }) => {
                state.loading = false
                state.error = payload as RejectedPayload
            })
            .addCase(fetchBooks.pending, (state: BookState) => {
                state.loading = true
                state.books = []
                state.error = null
                state.totalCount = 0
            })
    },
})
export const { openBook } = bookSlice.actions
export default bookSlice.reducer