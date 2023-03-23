import { FormEvent, useRef } from 'react'
import { Select } from '../Select/Select'
import { searchCategories, orderPrametres, isEqualRequest, Parameters } from './utils'
import useStoreActions from '../../hooks/useStoreActions'
import searchIcon from '../../assets/search.svg'
import './Search.scss'

type FormElements = HTMLFormControlsCollection & { searchValue: {value: string}, category: {value: string}, orderBy: {value: string} }

export const Search = () => {
    const { fetchBooks } = useStoreActions()
    const lastRequestValue = useRef<Parameters>({} as Parameters)

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { searchValue, category, orderBy } = (e.target as HTMLFormElement).elements as FormElements
        
        const searchParameters = {
            searchValue: searchValue.value, 
            category: category.value, 
            orderBy: orderBy.value
        }

        if (!searchValue.value.trim() || isEqualRequest(searchParameters, lastRequestValue.current)) return;
        window.scrollTo(0, 0)
        lastRequestValue.current = searchParameters
        fetchBooks({ ...searchParameters, startIndex: 0 })
    }

    return (
        <div className="search">
            <form onSubmit={submitHandler}>
                <div className="search__input-container">
                    <input 
                        name='searchValue' 
                        className='search__input' 
                        type="text" 
                        placeholder='Search...'
                        autoComplete='off'
                    />
                    <button type='submit' className='search__button' title='Search book'>
                        <img className='button__icon' src={searchIcon} alt="Search" />
                    </button>
                </div>
                <div className="search-controllers">
                    <Select 
                        labelText="Select category: "
                        name="category"
                        options={searchCategories} 
                        className="search__categories" 
                    />
                    <Select 
                        labelText="Ordered by:"
                        name="orderBy"
                        options={orderPrametres} 
                        className="order-params" 
                    />
                </div>
            </form>
        </div>
    )
}