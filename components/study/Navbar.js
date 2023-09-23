import css from '@/scss/study/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'
import { useState } from 'react'
import DropDownNav from './DropDownNav'

export default function Navbar({ module, modulesInfo, sectionContent, dd, setDd }) {
  const [ddOffsets, setDdOffsets] = useState({ triangle: 0, content: 0 })

  return (
    <>
      <div className={css.navbar}>
        <Breadcrumbs
          sectionContent={sectionContent}
          setDd={setDd}
          setDdOffsets={setDdOffsets}
        />
        <Toolbar />
      </div>
      <DropDownNav
        module={module}
        modulesInfo={modulesInfo}
        sectionContent={sectionContent}
        dd={dd}
        ddOffsets={ddOffsets}
      />
    </>
  )
}