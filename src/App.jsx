import { useState } from 'react'
import './App.css'
import GenreCollection from './components/GenreCollection.jsx'

function App() {
  // List of genres displayed
  const [genresDisplayed, setGenresDisplayed] = useState(['fiction', 'non-fiction', 'children']);

  // Toggle (turn on/off) display of specified genre
  const toggleGenreDisplay = (targetGenre) => {
    // If currently displayed
    if (genresDisplayed.includes(targetGenre)) {
      setGenresDisplayed(genresDisplayed.filter(genre => genre !== targetGenre));
    }
    else {
      setGenresDisplayed([...genresDisplayed, targetGenre]);
    }
  }

  return (
    <>
      <h1>Online Bookstore</h1>

      {/* Buttons to toggle display for each genre */}
      <div className='toggle-button-div'>
        {['fiction', 'non-fiction', 'children'].map(genre => (

          <button
            onClick={() => toggleGenreDisplay(genre)} //Toggle display status
          >
            {/* Button text: Show/Hide [Genre] */}
            {genresDisplayed.includes(genre) ? 'Hide' : 'Show'} {genre[0].toUpperCase() + genre.slice(1)}
          </button>

        ))}
      </div>

      {/* Renders displayed genres and books of displayed genres */}
      {genresDisplayed.includes('fiction') && <GenreCollection genre='fiction'/>}
      {genresDisplayed.includes('non-fiction') && <GenreCollection genre='non-fiction'/>}
      {genresDisplayed.includes('children') && <GenreCollection genre='children'/>}



      {/* alt method - issue: order of genres is inconsistent */}
      {/* {genresDisplayed.map(genre => (
        <GenreCollection genre={genre}/>
      ))} */}
    </>
  )
}

export default App
