import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import ProgressBar from '@/components/study/ProgressBar'
import { getModuleProgress, getChapterProgress, getSectionProgress } from '@/lib/userProgress'
import css from '@/scss/study/DropDownNav.module.scss'

export default function DropDownNav({ module, modulesInfo, localContent, setIsLoading,
  dropDown, setDropDown, dropDownOffset, user }) {

  const router = useRouter()

  function navTo(chapter, section) {
    setIsLoading(true)
    setDropDown(null)
    router.push(`/${module.pathName}/${chapter}/${section}`).then(() => { setIsLoading(false) })
  }

  function getStyle(navType) {
    return {
      left: dropDownOffset,
      zIndex: dropDown === navType ? '10' : '-10',
      opacity: dropDown === navType ? '1' : '0',
    }
  }

  return (
    <div>
      <div>
        <div className={css.triangleContainer} style={getStyle('modules')}>
          <div className={css.triangle}></div>
        </div>
        <div className={css.content} style={getStyle('modules')}>
          {modulesInfo.map(moduleInfo => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${module.id === moduleInfo.id ? css.selected : ''}`}
              onClick={(e) => { e.stopPropagation(); location.replace(`/${moduleInfo.pathName}`) }}
            >
              <div className={css.number}>M{moduleInfo.id}</div>
              <div>{moduleInfo.displayName}</div>
              {user && <ProgressBar progress={getModuleProgress(user, moduleInfo)} />}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={css.triangleContainer} style={getStyle('chapters')}>
          <div className={css.triangle}></div>
        </div>
        <div className={css.content} style={getStyle('chapters')}>
          {module.script.filter(unit => unit.type === 'heading').map(unit => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${unit.chapter === localContent.chapter.nr ? css.selected : ''}`}
              onClick={(e) => { e.stopPropagation(); navTo(unit.chapter, 1) }}
            >
              <div className={css.number}>{unit.chapter}</div>
              <div>{unit.content}</div>
              {user && <ProgressBar progress={getChapterProgress(user, module, unit)} />}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={css.triangleContainer} style={getStyle('sections')}>
          <div className={css.triangle}></div>
        </div>
        <div className={css.content} style={getStyle('sections')}>
          {module.script.filter(unit => (
            unit.chapter === localContent.chapter.nr && unit.type === 'subheading'
          )).map(unit => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${unit.section === localContent.section.nr ? css.selected : ''}`}
              onClick={(e) => { e.stopPropagation(); navTo(unit.chapter, unit.section) }}
            >
              <div className={css.number}>{unit.section}</div>
              <div>{unit.content}</div>
              {user && <ProgressBar progress={getSectionProgress(user, module, unit)} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}