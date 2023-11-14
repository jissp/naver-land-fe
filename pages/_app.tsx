import type { AppProps } from 'next/app';
import Layout from '@/src/components/layouts/default/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Layout><Component {...pageProps} /></Layout>;
}