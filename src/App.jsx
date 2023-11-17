import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'


function App() {
  const [selectedPokemonName, setSelectedPokemonName] = useState(null)

  return (
    <>
    {selectedPokemonName ? (<div>Short Pokemon Message</div>) : (<PokemonList setSelectedPokemonName={setSelectedPokemonName}/>)}
    </>
  )
}

export default App
