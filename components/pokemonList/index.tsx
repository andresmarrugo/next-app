import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import usePokemonList from '@hooks/usePokemonList'
import style from './pokemonList.module.css'
type Props = {
    pokemonList: any[]
}

const PokemonList = (props: Props) => {
    const { pokemonList = [] } = props
    return (
        <div>
            {pokemonList?.map((pokemon: any) => (
                <Link key={pokemon.name} href={`/pokemon/detail/${pokemon.name}`} className={style.link}><h2 >{pokemon.name}</h2></Link>
            ))}
        </div>
    )
}

export default PokemonList;