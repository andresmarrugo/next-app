import { useState, useEffect } from 'react'

const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        fetch("/api/poke").then(async (res: any) => {
            setPokemonList(await res.json())
        })
    }, [])

    return pokemonList
}

export default usePokemonList