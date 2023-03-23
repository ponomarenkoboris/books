import { FC } from 'react'
import { Book } from '../../models/state.model';
import useStoreActions from '../../hooks/useStoreActions';
import './BookCard.scss'

interface BookCardProps {
    book: Book['volumeInfo']
}

export const BookCard: FC<BookCardProps> = ({ book }) => {
    const { title, categories = null, authors = null, imageLinks = null } = book
    const { openBook } = useStoreActions()


    const clickHandler = () => {
        openBook(book)
    }

    return (
        <div onClick={clickHandler} className='book'>
            {imageLinks?.smallThumbnail && <img src={imageLinks?.smallThumbnail} alt={title} className='book__image' />}
            {categories && <p className='book__category-name'>{categories[0]}</p>}      
            <p className='book__name'>{title}</p>
            {authors && <p className='book__authors'>{authors[0]}</p>}
        </div>
    )
}
