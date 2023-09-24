import css from '@/scss/study/StudyRoot.module.scss'
import Navbar from './Navbar'
import Script from './Script'
import getSectionContent from '@/lib/getSectionContent'
import { useState } from 'react'
import ModuleProvider from '@/lib/ModuleProvider'
import StackProvider from '@/lib/StackProvider'
import Stack from './Stack'

export default function StudyRoot({ module, modulesInfo, chapterNr, sectionNr }) {
  const sectionContent = getSectionContent(module, chapterNr, sectionNr)
  const [dd, setDd] = useState(null)
  const [stack, setStack] = useState([])

  return (
    <ModuleProvider value={module}>
      <StackProvider value={[stack, setStack]}>
        <Navbar
          module={module}
          modulesInfo={modulesInfo}
          sectionContent={sectionContent}
          dd={dd}
          setDd={setDd}
        />
        <div className={css.main} onMouseEnter={() => { setDd(null) }}>
          <Script sectionContent={sectionContent} />
          <Stack stack={stack} setStack={setStack} />
        </div>
      </StackProvider>
    </ModuleProvider>
  )
}