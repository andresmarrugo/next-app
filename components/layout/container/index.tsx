import React, { PropsWithChildren } from 'react'
import styles from "./container.module.css";
type Props = {}

const Container = ({ children }: PropsWithChildren<Props>) => {
    return (
        <>
            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}

export default Container