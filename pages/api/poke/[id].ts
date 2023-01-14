import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    pokemon: unknown
}

export default async function getPokemon(req: NextApiRequest, res: NextApiResponse<Data>) {
    const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${req.query.id}`)).json()
    res.status(200).json(response)
} 