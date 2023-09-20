import css from '@/scss/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'

export default function Navbar({ module, chapterNr, sectionNr }) {
  return (
    <div className={css.container}>
      <Breadcrumbs
        module={module}
        chapterNr={chapterNr}
        sectionNr={sectionNr}
      />
      <Toolbar />
    </div>
  )
}