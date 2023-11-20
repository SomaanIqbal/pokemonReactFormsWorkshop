import React from 'react'
import { useState } from 'react';
import PokemonRow from './PokemonRow';
import { useEffect } from 'react';

const dummyPokemon = [
    { id: 1, name: "pikachu" },
    { id: 2, name: "pichu" }
]

const PokemonList = ({ setSelectedPokemonName }) => {
    const [pokemons, setPokemons] = useState(dummyPokemon);
    const [inputName, setInputName] = useState('')
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const jsonResponse = await response.json();
                console.log(jsonResponse)
                setPokemons(jsonResponse.results);

            } catch (error) {
                setError(error);
            }
        }
        fetchPokemons();

    }, [])

    const addInputedPokemon = (event) => {
        event.preventDefault()
        console.log(inputName)
        const newPokemon = {
            name: inputName
        }
        setPokemons([...pokemons, newPokemon])
    }

    return (
        <div>
            <form>
                <input onChange={(event) => setInputName(event.target.value)} />
                <button onClick={ addInputedPokemon }>Submit Pokemon Name</button>

            </form>

            <table>
                <thead>
                    <tr>
                        <th colSpan="1"> Pokemon List</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Name</td>
                    </tr>
                    {pokemons.map((pokemon) => {
                        return < PokemonRow key={pokemon.name} pokemon={pokemon} setSelectedPokemonName={setSelectedPokemonName} />
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PokemonList