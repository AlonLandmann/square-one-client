import { useEffect, useState } from 'react'
import Navbar from '@/components/study/Navbar'
import Script from '@/components/study/Script'
import Stack from '@/components/study/Stack'
import Core from '@/components/study/Core'
import Notes from '@/components/study/Notes'
import StackProvider from '@/hooks/StackProvider'
import ModuleProvider from '@/hooks/ModuleProvider'
import useAuth from '@/hooks/useAuth'
import getLocalContent from '@/lib/getLocalContent'
import css from '@/scss/study/StudyRoot.module.scss'

export default function StudyRoot({ module, moduleCatalogue, chapterNr, sectionNr }) {
  const { isLoading, user, fetchUser } = useAuth()
  const localContent = getLocalContent(module, chapterNr, sectionNr)
  const [isRouting, setIsRouting] = useState(false)
  const [dropDown, setDropDown] = useState(null)
  const [rightSide, setRightSide] = useState('stack')
  const [stack, setStack] = useState([])
  const [notes, setNotes] = useState('Notes')
  
  useEffect(() => {
    setRightSide('stack')
  }, [stack])

  if (isLoading) return null

  return (
    <ModuleProvider value={module}>
      <StackProvider value={[stack, setStack]}>
        <Navbar
          module={module}
          moduleCatalogue={moduleCatalogue}
          localContent={localContent}
          setIsRouting={setIsRouting}
          dropDown={dropDown}
          setDropDown={setDropDown}
          rightSide={rightSide}
          setRightSide={setRightSide}
          user={user}
        />
        <div className={css.main} onMouseEnter={() => { setDropDown(null) }}>
          <div>
            {isRouting &&
              <div className={css.loaderContainer}>
                <div className={css.loader}></div>
              </div>
            }
            <div style={{ opacity: isRouting ? '0' : '1' }}>
              <Script
                localContent={localContent}
                setIsRouting={setIsRouting}
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