import { useEffect, useState } from 'react'
import ModuleProvider from '@/components/study/ModuleProvider'
import StackProvider from '@/components/study/StackProvider'
import Navbar from '@/components/study/Navbar'
import Script from '@/components/study/Script'
import Stack from '@/components/study/Stack'
import Core from '@/components/study/Core'
import Notes from '@/components/study/Notes'
import getLocalContent from '@/lib/getLocalContent'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/study/StudyRoot.module.scss'

export default function StudyRoot({ module, moduleCatalogue, chapterNr, sectionNr }) {
  const localContent = getLocalContent(module, chapterNr, sectionNr)
  const [isLoading, setIsLoading] = useState(false)
  const [dropDown, setDropDown] = useState(null)
  const [rightSide, setRightSide] = useState('stack')
  const [stack, setStack] = useState([])
  const [notes, setNotes] = useState('Write raw text and formulas [a+b=c] in the bottom. To see how to use the editor to its fullest, check this page.')
  const { user, fetchUser } = useAuth()
  
  useEffect(() => {
    setRightSide('stack')
  }, [stack])

  return (
    <ModuleProvider value={module}>
      <StackProvider value={[stack, setStack]}>
        <Navbar
          module={module}
          moduleCatalogue={moduleCatalogue}
          localContent={localContent}
          setIsLoading={setIsLoading}
          dropDown={dropDown}
          setDropDown={setDropDown}
          rightSide={rightSide}
          setRightSide={setRightSide}
          user={user}
        />
        <div className={css.main} onMouseEnter={() => { setDropDown(null) }}>
          <div>
            {isLoading &&
              <div className={css.loaderContainer}>
                <div className={css.loader}></div>
              </div>
            }
            <div style={{ opacity: isLoading ? '0' : '1' }}>
              <Script
                localContent={localContent}
                setIsLoading={setIsLoading}
                user={user}
                fetchUser={fetchUser}
              />
            </div>
          </div>
          {rightSide === 'stack' &&
            <Stack
              setRightSide={setRightSide}
              stack={stack}
              setStack={setStack}
            />
          }
          {rightSide === 'core' &&
            <Core
              module={module}
              setRightSide={setRightSide}
              stack={stack}
              setStack={setStack}
            />
          }
          {rightSide === 'notes' &&
            <Notes
              notes={notes}
              setNotes={setNotes}
            />
          }
        </div>
      </StackProvider>
    </ModuleProvider>
  )
}