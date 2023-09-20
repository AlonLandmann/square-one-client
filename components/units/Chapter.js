import css from '@/scss/units/Chapter.module.scss'

export default function Chapter({ chapter }) {
  return (
    <div className={css.container}>
      {chapter.nr} {chapter.name}
    </div>
  )
}