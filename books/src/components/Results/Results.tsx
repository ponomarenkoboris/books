import { FC } from 'react'
import { BookCard } from '../BookCard/BookCard'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import useStoreActions from '../../hooks/useStoreActions'
import './Results.scss'
import { BookPreview } from '../BookPreview/BookPreview'

export const Results: FC = () => {
    const { 
        books, 
        searchParameters, 
        totalCount, 
        preview, 
        loading,
        error
    } = useTypedSelector(store => store.bookReducer)
    const { fetchBooks } = useStoreActions()

    const loadMoreHandler = () => {
        fetchBooks({ ...searchParameters, startIndex: books.length })
    }

    return (
        <div className='results'>
            <div className="results__search-status">
                {error && <p key={'error'} className='error-message'>{error}</p>}
                {
                    loading 
                    ? <div className="spinner"></div>
                    : totalCount ? <p className='results__count'>Found {totalCount} results</p> : null
                }
            </div>
            <div className="books-list">
                {books.map(({ id, volumeInfo }) => (
                    <BookCard key={id + Math.random() * 1000} book={volumeInfo} />
                ))}
            </div>
            {preview ? <BookPreview book={preview} /> : (
                <div 
                    className='load-more'
                    style={{ visibility: books.length === totalCount ? 'hidden' : 'visible' }}
                >
                    <button onClick={loadMoreHandler}   className='load-more__btn'>Load more</button>
                </div>
            )}
        </div>
    )
}
