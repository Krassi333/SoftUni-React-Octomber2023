import MovieList from './components/MovieList'

import './App.css'
import Timer from './components/Timer'
import Counter from './components/Counter'

function App() {
    

    const movies = [
        {
            title: 'The Matrix',
            description: 'Description here'
        },
        {
            title: 'Man of steel',
            description: 'Description here'
        },
        {
            title: 'Harry Potter',
            description: 'Description here'
        }
    ]

    return (
        <div>
            <h1>My First Dynamic React Application</h1>
            <Counter/>

            <Timer startTime={5} />
            <Timer startTime={10} />

            <MovieList movies={movies} headingText="Movie List" secondaryText="Secondary Text"></MovieList>
        </div>
    )
}

export default App
