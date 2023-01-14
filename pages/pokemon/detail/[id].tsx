import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import usePokemon from '@hooks/usePokemon'

type Props = {}

const PokemonDetail = (props: Props) => {
    const { query: { id } } = useRouter()
    const pokemon = usePokemon(id as string) as any
    console.log('pokemon.sprites?.front_default :>> ', pokemon.sprites?.front_default);
    return (
        pokemon && (<div>
            <h2>Name: {id}</h2>
            <Image
                width={300}
                height={300}
                src={pokemon.sprites?.front_default}
                alt={id as string}
            />
        </div>)
    )
}

export default PokemonDetail