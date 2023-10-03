import Head from 'next/head'
import InfoRoot from '@/components/info/InfoRoot'
import dbConnect from '@/db/dbConnect'
import Module from '@/db/models/Module'
import hydrate from '@/lib/hydrate'

export default function Info({ moduleJson }) {
  const module = JSON.parse(moduleJson)

  return (
    <div>
      <Head>
        <title>{module.displayName}</title>
        <link rel='icon' type='image/x-icon' href='/favicon.svg'></link>
        <meta name='description' content='learn stem' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <InfoRoot module={module} />
      </main>
    </div>
  )
}

export async function getServerSideProps({ query: { moduleName } }) {
  dbConnect()

  const raw = await Module.findOne({ pathName: moduleName }, { _id: 0 })
  const module = hydrate(raw)

  return {
    props: {
      moduleJson: JSON.stringify(module)
    }
  }
}