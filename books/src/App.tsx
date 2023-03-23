import { Search } from './components/Search/Search'
import { Results } from './components/Results/Results';
import './App.scss';

const App = () => {
    return (
        <>
            <header className='header'>
                <h1>Search for books</h1>
                <Search />
            </header>
            <Results />
        </>
    )
}

export default App;
