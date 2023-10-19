import { useRouter } from 'next/router'
import { cloneDeep, find } from 'lodash'
import { getUser, putUser } from '@/db/dbFetch'
import { useModule } from '@/hooks/ModuleProvider'
import { isComplete } from '@/lib/userProgress'
import css from '@/scss/study/ScriptNav.module.scss'

export default function ScriptNav({ user, localContent, setIsRouting }) {
  const router = useRouter()
  const module = useModule()
  const complete = !user || isComplete(user, module, localContent)

  function navTo(path) {
    setIsRouting(true)
    router.push(path).then(() => { setIsRouting(false) })
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
      <div className={css.divider}></div>
      <div className={css.content}>

        <div className={css.previous} onClick={navToPrevious}>
          {localContent.previous &&
            <i className='bi bi-arrow-left'></i>
          }
        </div>
        <div>
          {localContent.next &&
            <div className={`${css.next} ${!complete ? css.incomplete : ''}`} onClick={navToNext}>
              <i className='bi bi-arrow-right'></i>
              <div>Next</div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}