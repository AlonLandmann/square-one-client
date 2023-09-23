import css from '@/scss/study/StudyRoot.module.scss'
import Navbar from './Navbar'
import Script from './Script'
import getSectionContent from '@/lib/getSectionContent'
import { useState } from 'react'

export default function StudyRoot({ module, modulesInfo, chapterNr, sectionNr }) {
  const sectionContent = getSectionContent(module, chapterNr, sectionNr)
  const [dd, setDd] = useState(null)

  return (
    <div>
      <Navbar
        module={module}
        modulesInfo={modulesInfo}
        sectionContent={sectionContent}
        dd={dd}
        setDd={setDd}
      />
      <div className={css.main} onMouseEnter={() => { setDd(null) }}>
        <Script sectionContent={sectionContent} />
      </div>
    </div>
  )
}