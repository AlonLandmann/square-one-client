import css from '@/scss/study/Script.module.scss'
import { v4 as uuid } from 'uuid'

export default function Script({ sectionContent }) {
  return (
    <div className={css.container}>
      <div className={css.chapter}>{sectionContent.chapter.name}</div>
      <div className={css.section}>{sectionContent.section.name}</div>
      {sectionContent.units.map(unit => (
        <div key={uuid()}>{unit.type}</div>
      ))}
    </div>
  )
}