import { useState } from 'react'
import './App.css'
import GenreCollection from './components/GenreCollection.jsx'

function App() {
  // Display status for each genre - can be on (true) or off (false)
  const [fictionDisplayed, setFictionDisplayed] = useState(true);
  const [nonfictionDisplayed, setNonfictionDisplayed] = useState(true);
  const [childrenDisplayed, setChildrenDisplayed] = useState(true);

  // Functions to toggle display of each genre
  const toggleFictionDisplay = () => {
    setFictionDisplayed(!fictionDisplayed);
  }
  const toggleNonfictionDisplay = () => {
    setNonfictionDisplayed(!nonfictionDisplayed);
  }
  const toggleChildrenDisplay = () => {
    setChildrenDisplayed(!childrenDisplayed);
  }

  return (
    <>
      <h1>Online Bookstore</h1>

      {/* Buttons to toggle display for each genre */}
      <div className='toggle-button-div'>
        <button onClick={() => toggleFictionDisplay()}>{fictionDisplayed ? 'Hide' : 'Show'} Fiction</button>
        <button onClick={() => toggleNonfictionDisplay()}>{nonfictionDisplayed ? 'Hide' : 'Show'} Nonfiction</button>
        <button onClick={() => toggleChildrenDisplay()}>{childrenDisplayed ? 'Hide' : 'Show'} Children</button>
      </div>

      {/* Renders displayed genres and books of displayed genres */}
      {fictionDisplayed && <GenreCollection genre='fiction'/>}
      {nonfictionDisplayed && <GenreCollection genre='non-fiction'/>}
      {childrenDisplayed && <GenreCollection genre='children'/>}
    </>
  )
}

export default App
