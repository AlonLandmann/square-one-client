import css from '@/scss/study/DropDownNav.module.scss'
import { v4 as uuid } from 'uuid'

export default function DropDownNav({ module, modulesInfo, sectionContent, dd, ddOffset }) {
  function navTo(chapter, section) {
    location.replace(`/${module.pathName}/${chapter}/${section}`)
  }

  function getStyle(id) {
    return {
      opacity: dd === id ? '1' : '0',
      left: ddOffset,
      zIndex: dd === id ? '10' : '-10'
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
              onClick={(e) => { e.stopPropagation(); location.replace(`/${moduleInfo.pathName}/1/1`) }}
            >
              <div className={css.number}>M{moduleInfo.id}</div>
              <div>{moduleInfo.displayName}</div>
            </div>
          ))
          }
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
              className={`${css.ddItem} ${unit.chapter === sectionContent.chapter.nr ? css.selected : ''}`}
              onClick={(e) => { e.stopPropagation(); navTo(unit.chapter, 1) }}
            >
              <div className={css.number}>{unit.chapter}</div>
              <div>{unit.content}</div>
            </div>
          ))
          }
        </div>
      </div>
      <div>
        <div className={css.triangleContainer} style={getStyle('sections')}>
          <div className={css.triangle}></div>
        </div>
        <div className={css.content} style={getStyle('sections')}>
          {module.script.filter(unit => (
            unit.chapter === sectionContent.chapter.nr && unit.type === 'subheading'
          )).map(unit => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${unit.section === sectionContent.section.nr ? css.selected : ''}`}
              onClick={(e) => { e.stopPropagation(); navTo(unit.chapter, unit.section) }}
            >
              <div className={css.number}>{unit.section}</div>
              <div>{unit.content}</div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}