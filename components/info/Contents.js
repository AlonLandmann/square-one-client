import { v4 as uuid } from 'uuid'
import css from '@/scss/info/Contents.module.scss'

export default function Contents({ user, module }) {
  function handleSectionNav(unit) {
    location.replace(`/${module.pathName}/${unit.chapter}/${unit.section}`)
  }

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.headline}>CONTENTS</div>
        <div className={css.divider}></div>
        {module.script.map(unit => {
          if (unit.type === 'heading') {
            return (
              <div key={uuid()} className={css.chapter}>
                <div className={css.number}>{unit.chapter}</div>
                <div className={css.name}>{unit.content}</div>
              </div>
            )
          }
          if (unit.type === 'subheading') {
            return (
              <div key={uuid()} className={css.section} onClick={() => { handleSectionNav(unit) }}>
                <div className={css.number}>{unit.chapter}.{unit.section}</div>
                <div className={css.name}>{unit.content}</div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}