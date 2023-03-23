import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchParameters, ReturnedPayload, Response, RejectedPayload } from '../../models/search.model'

const configureUrl = (params: SearchParameters) => {
    const key = 'AIzaSyB-esMi5kbjQhyVShVHqehyp-dNlxs7R0c'
    const value = params.searchValue.trim().replaceAll(' ', '+')
    return `https://www.googleapis.com/books/v1/volumes?q=${value}+subject=${params.category}&maxResults=30&startIndex=${params.startIndex}&orderBy=${params.orderBy}&key=${key}`
}

export const fetchBooks = createAsyncThunk<ReturnedPayload, SearchParameters, { rejectValue: RejectedPayload }>(
    'books/findBook',
    async (parameters, thunkApi) => {

        try {
            const response = await fetch(configureUrl(parameters))
            const data = await response.json() as Response
            if (data.totalItems === 0) return thunkApi.rejectWithValue(`Can\`t find anything by query: "${parameters.searchValue}"`)
            return thunkApi.fulfillWithValue({ books: data.items, parameters, totalCount: data.totalItems })
        } catch (error) {
            return thunkApi.rejectWithValue(null)
        }
    }
)
