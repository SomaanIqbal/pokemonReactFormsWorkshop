import React from 'react'
import { useState } from 'react';
import PokemonRow from './PokemonRow';
import { useEffect } from 'react';

const dummyPokemon = [
    {id: 1, name: "pikachu"},
    {id: 2, name: "pichu"}
]

const PokemonList = ({setSelectedPokemonName}) => {
    const [pokemons, setPokemons] = useState(dummyPokemon);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPokemons = async () => {
            try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const jsonResponse = await response.json();
            // console.log(jsonResponse)
            setPokemons(jsonResponse.results);

            } catch (error){
                setError(error);
            }
        }
        fetchPokemons();
        
    },[])
    return (
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
    );
}

export default PokemonList