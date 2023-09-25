import Head from 'next/head'
import HomeRoot from '@/components/home/HomeRoot'
import dbConnect from '@/db/dbConnect'
import Module from '@/db/models/Module'

export default function Home({ modulesInfoJson }) {
  const modulesInfo = JSON.parse(modulesInfoJson)

  return (
    <div>
      <Head>
        <title>Square One</title>
        <link rel='icon' type='image/x-icon' href='/favicon.svg'></link>
        <meta name='description' content='learn stem' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <HomeRoot modulesInfo={modulesInfo} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  dbConnect()

  const modulesInfo = await Module.find({}, { _id: 0, script: 0 }).sort({ id: 1 })

  return {
    props: {
      modulesInfoJson: JSON.stringify(modulesInfo)
    }
  }
}