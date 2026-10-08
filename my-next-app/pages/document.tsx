import { Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <html lang="en">
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
    )
}