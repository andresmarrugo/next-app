import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const Product = (props: Props) => {
    const { query: { id } } = useRouter()
    return (
        <div>this product is {id}</div>
    )
}

export default Product