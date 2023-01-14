import { useState, useEffect } from 'react'
type props = {
    name: string,
}
const usePokemon = (name: string) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`/api/poke/${name}`).then(async (res: any) => {
            setPokemon(await res.json())
        })
    }, [name])

    return pokemon
}

export default usePokemon