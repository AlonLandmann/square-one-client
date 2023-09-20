import css from '@/scss/units/Text.module.scss'
import TeX from '../parser/TeX'

export default function Text({ unit }) {
  return (
    <div className={css.container}>
      <TeX tex={unit.content} />
    </div>
  )
}