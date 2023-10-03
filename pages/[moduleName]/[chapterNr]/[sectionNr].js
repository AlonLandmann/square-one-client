import Head from 'next/head'
import StudyRoot from '@/components/study/StudyRoot'
import dbConnect from '@/db/dbConnect'
import Module from '@/db/models/Module'
import hydrate from '@/lib/hydrate'

export default function Study({ moduleJson, moduleCatalogueJson, chapterNr, sectionNr }) {
  const module = JSON.parse(moduleJson)
  const moduleCatalogue = JSON.parse(moduleCatalogueJson)

  return (
    <div>
      <Head>
        <title>{module.displayName}</title>
        <link rel='icon' type='image/x-icon' href='/favicon.svg'></link>
        <meta name='description' content='learn stem' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <StudyRoot
          module={module}
          moduleCatalogue={moduleCatalogue}
          chapterNr={Number(chapterNr)}
          sectionNr={Number(sectionNr)}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps({ query: { moduleName, chapterNr, sectionNr } }) {
  dbConnect()

  const raw = await Module.findOne({ pathName: moduleName }, { _id: 0 })
  const module = hydrate(raw)
  const moduleCatalogue = await Module.find({}, { _id: 0, script: 0 }).sort({ id: 1 })

  return {
    props: {
      moduleJson: JSON.stringify(module),
      moduleCatalogueJson: JSON.stringify(moduleCatalogue),
      chapterNr: chapterNr,
      sectionNr: sectionNr
    }
  }
}