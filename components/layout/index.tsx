import React, { PropsWithChildren } from 'react'
import Container from './container'
import Navbar from "./navbar"
import styles from './layout.module.css';
type Props = {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <Container>
                {children}
            </Container>

        </div>
    )
}

export default Layout