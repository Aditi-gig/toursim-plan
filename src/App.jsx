import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tours from './components/Tours'
import data from './data'


function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours (newTours);
        
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className='btnWhite' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>

    );
  }

  return (
    <>
    <div>
      
      <Tours tours={tours} removeTour={removeTour} className="app"></Tours>
    </div>
    </>
  )
}

export default App
