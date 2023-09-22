import css from '@/scss/study/DropDownNav.module.scss'
import { v4 as uuid } from 'uuid'

export default function DropDownNav({ module, sectionContent, dd }) {
  function navTo(chapter, section) {
    location.replace(`/${module.pathName}/${chapter}/${section}`)
  }

  return (
    <div className={css.container} style={{ opacity: dd.inView ? '1' : '0', left: `${dd.boxOffset}px` }}>
      <div className={css.triangle} style={{ left: `${dd.triangleOffset - dd.boxOffset}px` }}></div>
      <div className={css.content}>
        {dd.inView === 'chapters' &&
          module.script.filter(unit => unit.type === 'heading').map(unit => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${unit.chapter === sectionContent.chapter.nr ? css.selected : ''}`}
              onClick={() => { navTo(unit.chapter, 1) }}
            >
              <div className={css.number}>{unit.chapter}</div>
              <div>{unit.content}</div>
            </div>
          ))
        }
        {dd.inView === 'sections' &&
          module.script.filter(unit => (
            unit.chapter === sectionContent.chapter.nr && unit.type === 'subheading'
          )).map(unit => (
            <div
              key={uuid()}
              className={`${css.ddItem} ${unit.section === sectionContent.section.nr ? css.selected : ''}`}
              onClick={() => { navTo(unit.chapter, unit.section) }}
            >
              <div className={css.number}>{unit.section}</div>
              <div>{unit.content}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}