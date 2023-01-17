import React, { useState, useEffect } from 'react'
import List from '@components/pokemonList'
import fetch1 from 'isomorphic-unfetch'
type Props = {
    pokemonList: any[]
}

import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await fetch1('https://pokeapi.co/api/v2/pokemon')
    const pokemonList = await data.json()
    console.log(pokemonList)
    return {
        props: {
            pokemonList: pokemonList.results
        }
    }
}
const MainPage = ({ pokemonList }: Props) => {

    return (
        <>
            <List pokemonList={pokemonList} />
        </>
    )
}

export default MainPage;