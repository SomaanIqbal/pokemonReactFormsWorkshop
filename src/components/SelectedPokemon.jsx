import { useEffect, useState } from "react";


const SelectedPokemon = ({ selectedPokemonName,setSelectedPokemonName }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null);
    console.log(pokemonDetails)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
                const jsonResponse = await response.json();

                // console.log("jsonResponse",jsonResponse);
                setPokemonDetails(jsonResponse);

            } catch (error) {
                setError(error)
            }
        }
        fetchPokemonDetails()
    }, [])

    return (
        <div>
            {pokemonDetails ? (<h1>{pokemonDetails.name} <br></br>Height:{pokemonDetails.height}</h1>) : (<h2>loading ...</h2>)}
            <button
                onClick={() => {
                    setSelectedPokemonName(null);
                }}
            >
                Back
            </button>
       
        </div>
        
    )
}

export default SelectedPokemon