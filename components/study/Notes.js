import { cloneDeep, find } from 'lodash'
import toast from 'react-hot-toast'
import TeX from '@/components/parser/TeX'
import { getUser, putUser } from '@/db/dbFetch'
import css from '@/scss/study/Notes.module.scss'

export default function Notes({ user, module, localContent, notes, setNotes }) {
  function handleChange(event) {
    setNotes(event.target.value)
  }

  async function handleSave() {
    let currentUser = await getUser(user.email)
    let newUser = cloneDeep(currentUser)
    let sections = newUser.modules.filter(m => m.id === module.id)[0].sections
    let section = find(sections, (s => {
      return s.chapterNr === localContent.chapter.nr && s.sectionNr === localContent.section.nr
    }))

    section.notes = notes

    await putUser(user.email, newUser, () => { toast.success('notes saved') })
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
      {user &&
        <div className={css.saveButton} onClick={handleSave}>
          <i className='bi bi-floppy'></i>
          <div>save</div>
        </div>
      }
    </div>
  )
}