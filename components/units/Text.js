import TeX from '@/components/parser/TeX'
import css from '@/scss/units/Text.module.scss'

export default function Text({ unit }) {
  return (
    <div className={css.container}>
      <TeX tex={unit.content} />
    </div>
  )
}