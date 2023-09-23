import css from '@/scss/study/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'
import { useState } from 'react'
import DropDownNav from './DropDownNav'

export default function Navbar({ module, modulesInfo, sectionContent, dd, setDd }) {
  const [ddOffset, setDdOffset] = useState(0)

  return (
    <>
      <div className={css.navbar}>
        <Breadcrumbs
          sectionContent={sectionContent}
          setDd={setDd}
          setDdOffset={setDdOffset}
        />
        <Toolbar setDd={setDd} />
      </div>
      <DropDownNav
        module={module}
        modulesInfo={modulesInfo}
        sectionContent={sectionContent}
        dd={dd}
        ddOffset={ddOffset}
      />
    </>
  )
}