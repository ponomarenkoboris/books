import { SearchParameters } from "../../models/search.model"

export const searchCategories = [
    {id: 1, value: 'all'},
    {id: 2, value: 'art'},
    {id: 3, value: 'biography'},
    {id: 4, value: 'computers'},
    {id: 5, value: 'history'},
    {id: 6, value: 'medical'},
    {id: 7, value: 'poetry'},
]

export const orderPrametres = [
    {id: 1, value: 'relevance'},
    {id: 2, value: 'newest'},
]

export type Parameters = Omit<SearchParameters, 'startIndex'>

export const isEqualRequest = (params: Parameters, lastParams: Parameters): boolean => {
    let isEqual = true

    for (let key in params) {
        const typedKey = key as keyof Parameters
        if (params[typedKey] !== lastParams[typedKey]) isEqual = false
    }

    return isEqual
}