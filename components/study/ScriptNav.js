import { useRouter } from 'next/router'
import { useState } from 'react'
import { cloneDeep, find } from 'lodash'
import { useModule } from '@/components/study/ModuleProvider'
import { getUser, putUser } from '@/db/dbFetch'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/study/ScriptNav.module.scss'

export default function ScriptNav({ localContent, setIsLoading }) {
  const router = useRouter()
  const module = useModule()
  const { user } = useAuth()
  const [checked, setChecked] = useState(false)

  function navTo(path) {
    setIsLoading(true)
    router.push(path).then(() => { setIsLoading(false) })
  }

  function navToPrevious() {
    if (localContent.previous) {
      navTo(localContent.previous)
    }
  }

  async function navToNext() {
    if (localContent.next) {
      if (user) {
        let currentUser = await getUser(user.email)
        let newUser = cloneDeep(currentUser)
        let sections = newUser.modules.filter(m => m.id === module.id)[0].sections
        let section = find(sections, (s => {
          return s.chapterNr === localContent.chapter.nr && s.sectionNr === localContent.section.nr
        }))

        section.status = 'complete'

        await putUser(user.email, newUser, () => { navTo(localContent.next) })
      } else {
        navTo(localContent.next)
      }
    }
  }

  return (
    <div className={css.container}>
      <div className={css.chevron} onClick={navToPrevious}>
        {localContent.previous &&
          <i className='bi bi-chevron-left'></i>
        }
      </div>
      <div className={`${css.check} ${checked ? css.checked : ''}`}>
        <i className='bi bi-check2-all'></i>
      </div>
      <div className={css.chevron} onClick={navToNext}>
        {localContent.next &&
          <i className='bi bi-chevron-right'></i>
        }
      </div>
    </div>
  )
}