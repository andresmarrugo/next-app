import type { AppProps } from 'next/app'
import { Raleway } from '@next/font/google'
import Layout from '@components/layout';
const raleway = Raleway({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return <main className={raleway.className}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </main>
}