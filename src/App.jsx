import { useState } from 'react'
import './App.css'
import GenreCollection from './components/GenreCollection.jsx'

function App() {
  const [fictionDisplayed, setFictionDisplayed] = useState(true);
  const [nonfictionDisplayed, setNonfictionDisplayed] = useState(true);
  const [childrenDisplayed, setChildrenDisplayed] = useState(true);

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
      <div className='toggle-button-div'>
        <button onClick={() => toggleFictionDisplay()}>{fictionDisplayed ? 'Hide' : 'Show'} Fiction</button>
        <button onClick={() => toggleNonfictionDisplay()}>{nonfictionDisplayed ? 'Hide' : 'Show'} Nonfiction</button>
        <button onClick={() => toggleChildrenDisplay()}>{childrenDisplayed ? 'Hide' : 'Show'} Children</button>
      </div>
      {fictionDisplayed && <GenreCollection genre='fiction'/>}
      {nonfictionDisplayed && <GenreCollection genre='non-fiction'/>}
      {childrenDisplayed && <GenreCollection genre='children'/>}
    </>
  )
}

export default App
