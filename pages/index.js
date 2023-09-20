import Head from 'next/head'
import HomeRoot from '@/components/HomeRoot'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Square One</title>
        <link rel='icon' type='image/x-icon' href='/favicon.svg'></link>
        
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <HomeRoot />
      </main>
    </div>
  )
}