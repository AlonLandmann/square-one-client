import css from '@/scss/StudyRoot.module.scss'

export default function StudyRoot({ module, chapterNr, sectionNr }) {
  return (
    <div className={css.root}>
      Welcome to the course on {module.displayName}! This is chapter {chapterNr}, section {sectionNr}
    </div>
  )
}