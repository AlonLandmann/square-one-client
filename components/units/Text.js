import css from '@/scss/units/Text.module.scss'

export default function Text({ unit }) {
  return (
    <div className={css.container}>
      {unit.content}
    </div>
  )
}