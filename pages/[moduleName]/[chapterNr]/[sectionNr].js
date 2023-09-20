import Head from 'next/head'
import StudyRoot from '@/components/study/StudyRoot'
import dbConnect from '@/db/dbConnect'
import Module from '@/db/models/Module'

export default function Study({ moduleJson, chapterNr, sectionNr }) {
  const module = JSON.parse(moduleJson)

  return (
    <div>
      <Head>
        <title>{module.displayName}</title>
        <link rel='icon' type='image/x-icon' href='/favicon.svg'></link>

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <StudyRoot module={module} chapterNr={Number(chapterNr)} sectionNr={Number(sectionNr)} />
      </main>
    </div>
  )
}

export async function getServerSideProps({ query: { moduleName, chapterNr, sectionNr } }) {
  dbConnect()

  const module = await Module.findOne({ pathName: moduleName }, { _id: 0 })

  return {
    props: {
      moduleJson: JSON.stringify(module),
      chapterNr: chapterNr,
      sectionNr: sectionNr
    }
  }
}