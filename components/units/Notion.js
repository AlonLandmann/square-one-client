import { v4 as uuid } from 'uuid'
import Part from '@/components/parts/Part'
import TeX from '@/components/parser/TeX'
import css from '@/scss/units/Notion.module.scss'

export default function Notion({ unit }) {
  return (
    <div className={css.container}>
      <div className={css.headline}>
        <div>{unit.type.charAt(0).toUpperCase() + unit.type.slice(1)}</div>
        <div className={css.number}>{unit.number}.</div>
        <div className={css.name}>{unit.name}</div>
      </div>
      <div className={css.content}>
        <TeX tex={unit.content} />
      </div>
      {unit.parts &&
        <div className={css.parts}>
          {unit.parts.map((_, j) => {
            if (unit.selectedSub === undefined || unit.selectedSub === j) {
              return <Part key={uuid()} unit={unit} j={j} />
            }
          })}
        </div>
      }
    </div>
  )
}