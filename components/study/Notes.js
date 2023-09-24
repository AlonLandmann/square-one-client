import css from '@/scss/study/Notes.module.scss'
import TeX from '../parser/TeX'

export default function Notes({ notes, setNotes }) {
  function handleChange(event) {
    setNotes(event.target.value)
  }

  return (
    <div className={css.container}>
      <div className={css.tex}><TeX tex={notes} /></div>
      <textarea className={css.raw} value={notes} onChange={handleChange} spellCheck={false}></textarea>
    </div>
  )
}