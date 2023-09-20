import css from '@/scss/study/StudyRoot.module.scss'
import Navbar from './Navbar'
import Script from './Script'

export default function StudyRoot({ module, chapterNr, sectionNr }) {
  return (
    <div>
      <Navbar module={module} chapterNr={chapterNr} sectionNr={sectionNr} />
      <div className={css.main}>
        <Script module={module} chapterNr={chapterNr} sectionNr={sectionNr} />
      </div>
    </div>
  )
}