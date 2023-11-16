import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <title>My page</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
            </Head>
            <body className='custom_class'>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    };
}