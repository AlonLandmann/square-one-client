import css from '@/scss/study/ScriptNav.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ScriptNav({ sectionContent, setIsLoading }) {
  const [checked, setChecked] = useState(false)
  const router = useRouter()

  function navToPrevious() {
    if (sectionContent.previous) {
      setIsLoading(true)
      router.push(sectionContent.previous).then(() => { setIsLoading(false) })
    }
  }

  function navToNext() {
    if (sectionContent.next) {
      setIsLoading(true)
      router.push(sectionContent.next).then(() => { setIsLoading(false) })
    }
  }

  return (
    <div className={css.container}>
      <div className={css.chevron} onClick={navToPrevious}>
        {sectionContent.previous &&
          <i className='bi bi-chevron-left'></i>
        }
      </div>
      <div
        className={`${css.check} ${checked ? css.checked : ''}`}
        onClick={() => { setChecked(prev => !prev) }}
      >
        <i className='bi bi-check2-all'></i>
      </div>
      <div className={css.chevron} onClick={navToNext}>
        {sectionContent.next &&
          <i className='bi bi-chevron-right'></i>
        }
      </div>
    </div>
  )
}