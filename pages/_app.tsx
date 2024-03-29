import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

function App({ Component, pageProps }: AppProps) {
  const name = 'nextjs-tailwindcss-examples'
  const url = 'https://github.com/WuChenDi/nextjs-tailwindcss-examples'
  const description = `${name} is a Example of code using nextjs and tailwindcss`

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover'
        />

        <title>{name}</title>
        <meta name='title' content={name} />
        <meta name='description' content={description} />

        <meta property='og:site_name' content={name} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={name} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/thumbnail.png' />
      </Head>
      <div className='container'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default App
