import css from '@/scss/StudyRoot.module.scss'
import Navbar from './Navbar'

export default function StudyRoot({ module, chapterNr, sectionNr }) {
  return (
    <div>
      <Navbar module={module} chapterNr={chapterNr} sectionNr={sectionNr} />
    </div>
  )
}