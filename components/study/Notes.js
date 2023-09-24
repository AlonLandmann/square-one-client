import TeX from '@/components/parser/TeX'
import css from '@/scss/study/Notes.module.scss'

export default function Notes({ notes, setNotes }) {
  function handleChange(event) {
    setNotes(event.target.value)
  }

  return (
    <div className={css.container}>
      <div className={css.tex}>
        <TeX tex={notes} />
      </div>
      <textarea
        className={css.raw}
        spellCheck={false}
        value={notes}
        onChange={handleChange}
      >
        
      </textarea>
    </div>
  )
}