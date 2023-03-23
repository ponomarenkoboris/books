import { FC, useEffect } from 'react'
import { Book } from '../../models/state.model'
import closeIcon from '../../assets/close.svg'
import useStoreActions from '../../hooks/useStoreActions'
import './BookPreview.scss'

interface BookPreviewProps {
    book: Book['volumeInfo']
}

export const BookPreview: FC<BookPreviewProps> = ({ book }) => {
    const { openBook } = useStoreActions()
    

    const { 
        imageLinks = null, 
        title, 
        description = null, 
        categories = null, 
        authors = null 
    } = book

    const clickHandler = () => openBook(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    
    return (
        <div className="book-preview">
            <button className='preview__close' onClick={clickHandler}>
                <img src={closeIcon} alt="" title='Close' />
            </button>
            <div className="preview">
                <div className="preview__thumbnail">
                    {imageLinks && <img src={imageLinks.thumbnail} className="" alt={title} />}
                </div>
                <div className="info">
                    {categories && <p className="info__categories">{categories.reduce((total, curr) => `${total} / ${curr}`)}</p>}
                    <p className="info__title">{title}</p>
                    {authors && <p className="info__authors">{authors.reduce((total, curr) => `${total}, ${curr}`)}</p>}
                    {description && <p className="info__description">{description}</p>}
                </div>
            </div>
        </div>
    )
}
