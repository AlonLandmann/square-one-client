import css from '@/scss/study/StudyRoot.module.scss'
import Navbar from './Navbar'
import Script from './Script'
import getSectionContent from '@/lib/getSectionContent'
import { useState } from 'react'
import ModuleProvider from '@/lib/ModuleProvider'
import StackProvider from '@/lib/StackProvider'
import Stack from './Stack'
import Core from './Core'
import Notes from './Notes'

export default function StudyRoot({ module, modulesInfo, chapterNr, sectionNr }) {
  const sectionContent = getSectionContent(module, chapterNr, sectionNr)
  const [dd, setDd] = useState(null)
  const [stack, setStack] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [rightSide, setRightSide] = useState('stack')
  const [notes, setNotes] = useState('Write raw text and formulas [a+b=c] in the bottom. To see how to use the editor to its fullest, check this page.')

  return (
    <ModuleProvider value={module}>
      <StackProvider value={[stack, setStack]}>
        <Navbar
          module={module}
          modulesInfo={modulesInfo}
          sectionContent={sectionContent}
          dd={dd}
          setDd={setDd}
          setIsLoading={setIsLoading}
          rightSide={rightSide}
          setRightSide={setRightSide}
        />
        <div className={css.main} onMouseEnter={() => { setDd(null) }}>
          <div>
            {isLoading &&
              <div className={css.loaderContainer}>
                <div className={css.loader}></div>
              </div>
            }
            <div style={{ opacity: isLoading ? '0' : '1' }}>
              <Script sectionContent={sectionContent} setIsLoading={setIsLoading} />
            </div>
          </div>
          {rightSide === 'stack' &&
            <Stack stack={stack} setStack={setStack} setRightSide={setRightSide} />
          }
          {rightSide === 'core' &&
            <Core module={module} stack={stack} setStack={setStack} setRightSide={setRightSide} />
          }
          {rightSide === 'notes' &&
            <Notes notes={notes} setNotes={setNotes} />
          }
        </div>
      </StackProvider>
    </ModuleProvider>
  )
}