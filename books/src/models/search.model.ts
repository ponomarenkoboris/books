import { Book } from './state.model'
export interface SearchParameters {
    searchValue: string;
    category: string;
    orderBy: string;
    startIndex: number;
}

export type FulfilledPayload = { books: Book[], parameters: SearchParameters, totalCount: number}
export type RejectedPayload = string | null
export type ReturnedPayload = FulfilledPayload | void
export type Response = { items: Book[], totalItems: number }