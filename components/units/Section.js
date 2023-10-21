import css from '@/scss/units/Section.module.scss'

export default function Section({ section }) {
  return (
    <div className={css.container}>
      <div>{section.ch}.{section.nr}</div>
      <div>{section.name}</div>
    </div>
  )
}