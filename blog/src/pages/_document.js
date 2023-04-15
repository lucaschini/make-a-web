import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/mark.svg" type="image/x-icon" />
      </Head>
      <body className='bg-back'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
