import React from 'react'
import style from './navbar.module.css'
type Props = {}

const CustomHeader = (props: Props) => {
    return (
        <div className={style.navbar}>
            <h1>Pokedex</h1>
        </div>
    )
}

export default CustomHeader