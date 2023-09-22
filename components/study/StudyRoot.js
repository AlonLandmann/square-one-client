import css from '@/scss/study/StudyRoot.module.scss'
import Navbar from './Navbar'
import Script from './Script'
import getSectionContent from '@/lib/getSectionContent'

export default function StudyRoot({ module, modulesInfo, chapterNr, sectionNr }) {
  const sectionContent = getSectionContent(module, chapterNr, sectionNr)

  return (
    <div>
      <Navbar module={module} modulesInfo={modulesInfo} sectionContent={sectionContent} />
      <div className={css.main}>
        <Script sectionContent={sectionContent} />
      </div>
    </div>
  )
}