import css from '@/scss/study/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'

export default function Navbar({ sectionContent }) {
  return (
    <div className={css.container}>
      <Breadcrumbs sectionContent={sectionContent} />
      <Toolbar />
    </div>
  )
}