import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import DropDownItem from '@/components/study/DropDownItem'
import { getModuleProgress, getChapterProgress, getSectionProgress } from '@/lib/userProgress'
import css from '@/scss/study/DropDownNav.module.scss'

export default function DropDownNav({ module, moduleCatalogue, localContent, setIsRouting,
  dropDown, setDropDown, dropDownOffset, user }) {

  const router = useRouter()

  function navTo(chapter, section) {
    setIsRouting(true)
    setDropDown(null)
    router.push(`/${module.pathName}/${chapter}/${section}`).then(() => { setIsRouting(false) })
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
          {moduleCatalogue.map(moduleInfo => (
            <DropDownItem
              key={uuid()}
              user={user}
              selected={module.id === moduleInfo.id}
              navFunction={() => { location.replace(`/${moduleInfo.pathName}`) }}
              number={`M${moduleInfo.id}`}
              content={moduleInfo.displayName}
              progress={getModuleProgress(user, moduleInfo)}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={css.triangleContainer} style={getStyle('chapters')}>
          <div className={css.triangle}></div>
        </div>
        <div className={css.content} style={getStyle('chapters')}>
          {module.script.filter(unit => unit.type === 'heading').map(unit => (
            <DropDownItem
              key={uuid()}
              user={user}
              selected={unit.chapter === localContent.chapter.nr}
              navFunction={() => { navTo(unit.chapter, 1) }}
              number={unit.chapter}
              content={unit.content}
              progress={getChapterProgress(user, module, unit)}
            />
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
            <DropDownItem
              key={uuid()}
              user={user}
              selected={unit.section === localContent.section.nr}
              navFunction={() => { navTo(unit.chapter, unit.section) }}
              number={unit.section}
              content={unit.content}
              progress={getSectionProgress(user, module, unit)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}