import css from '@/scss/units/Chapter.module.scss'

export default function Chapter({ chapter }) {
  return (
    <div className={css.container}>
      <div>{chapter.nr}</div>
      <div>{chapter.name}</div>
    </div>
  )
}