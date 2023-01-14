import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data: unknown
}

export default async function listAll(req: NextApiRequest, res: NextApiResponse<Data>) {
    const response = await (await fetch("https://pokeapi.co/api/v2/pokemon")).json()
    res.status(200).json(response.results)
}