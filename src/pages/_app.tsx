// pages/_app.tsx

import RootLayout from '@/app/layout';
import { AppProps } from 'next/app';
import 'src/app/globals.css';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RootLayout>

            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0.16/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0.16/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0.16/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#2196f3" />
                <meta name="theme-color" content="#ffffff" />

            </Head>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;