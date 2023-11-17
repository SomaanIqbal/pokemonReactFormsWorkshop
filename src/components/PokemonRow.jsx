import React from "react"

const PokemonRow = ({setSelectedPokemonName, pokemon}) => {

    return (
        <tr onClick = { () => { setSelectedPokemonName(pokemon.name)}}>
            <td>{pokemon.name}</td>
        </tr>
    )
}

export default PokemonRow