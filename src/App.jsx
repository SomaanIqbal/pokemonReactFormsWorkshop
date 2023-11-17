import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import SelectedPokemon from './components/SelectedPokemon'


function App() {
  const [selectedPokemonName, setSelectedPokemonName] = useState(null)


  return (
    <>
      {selectedPokemonName ? (<SelectedPokemon selectedPokemonName={selectedPokemonName} setSelectedPokemonName={setSelectedPokemonName}/>) : (<PokemonList setSelectedPokemonName={setSelectedPokemonName} />)}
       
    </>
    
  )
  
}

export default App
