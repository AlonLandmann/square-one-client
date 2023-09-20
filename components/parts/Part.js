import TeX from '@/components/parser/TeX'
import css from '@/scss/parts/Part.module.scss'

export default function Part({ unit, j }) {
  return (
    <div className={css.container}>
      <div className={css.number}>{j + 1}</div>
      <div className={css.content}><TeX tex={unit.parts[j].content} /></div>
    </div>
  )
}