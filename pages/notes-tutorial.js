import Head from 'next/head'
import NotesTutorialRoot from '@/components/notes-tutorial/NotesTutorialRoot'

export default function NotesTutorialPage() {
  return (
    <>
      <Head>
        <title>Notes Tutorial</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <NotesTutorialRoot />
      </main>
    </>
  )
}
