import css from '@/scss/study/DropDownNav.module.scss'
import { v4 as uuid } from 'uuid'

export default function DropDownNav({ module, modulesInfo, sectionContent, dd }) {
  function navTo(chapter, section) {
    location.replace(`/${module.pathName}/${chapter}/${section}`)
  }

  return (
    <>
      <div className={css.container} style={{ opacity: dd.inView === 'modules' ? '1' : '0', zIndex: dd.inView === 'modules' ? '1000' : '-1000', left: `${dd.boxOffset}px` }}>
        <div className={css.triangle} style={{ left: `${dd.triangleOffset - dd.boxOffset}px` }}></div>
        <div className={css.content}>
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
      <div className={css.container} style={{ opacity: dd.inView === 'chapters' ? '1' : '0', zIndex: dd.inView === 'chapters' ? '1000' : '-1000', left: `${dd.boxOffset}px` }}>
        <div className={css.triangle} style={{ left: `${dd.triangleOffset - dd.boxOffset}px` }}></div>
        <div className={css.content}>
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
      <div className={css.container} style={{ opacity: dd.inView  === 'sections' ? '1' : '0', zIndex: dd.inView === 'sections' ? '1000' : '-1000', left: `${dd.boxOffset}px` }}>
        <div className={css.triangle} style={{ left: `${dd.triangleOffset - dd.boxOffset}px` }}></div>
        <div className={css.content}>
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
    </>

  )
}