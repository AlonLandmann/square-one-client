import css from '@/scss/units/Section.module.scss'

export default function Section({ section }) {
  return (
    <div className={css.container}>
      {section.ch}.{section.nr} {section.name}
    </div>
  )
}