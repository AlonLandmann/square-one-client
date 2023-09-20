import css from '@/scss/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'

export default function Navbar({ module, chapterNr, sectionNr }) {
  return (
    <div className={css.container}>
      <Breadcrumbs
        module={module}
        chapterNr={chapterNr}
        sectionNr={sectionNr}
      />
      <div className={css.icons}></div>
    </div>
  )
}