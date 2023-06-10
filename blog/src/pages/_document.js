import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/mark.svg" type="image/x-icon" />
      </Head>
      <body className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] font-mono'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
