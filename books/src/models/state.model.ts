import { SearchParameters } from "./search.model";

export interface Book {
    id: string;
    volumeInfo: {
        authors?: string[];
        categories?: string[];
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
        title: string;
        description?: string;
    }
}

export interface BookState {
    totalCount: number;
    loading: boolean;
    error: string | null;
    books: Book[];
    searchParameters: SearchParameters;
    preview: Book['volumeInfo'] | null
}