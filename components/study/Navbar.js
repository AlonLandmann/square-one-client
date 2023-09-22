import css from '@/scss/study/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'
import { useState } from 'react'
import DropDownNav from './DropDownNav'

export default function Navbar({ module, modulesInfo, sectionContent }) {
  const [dd, setDd] = useState({ inView: false, triangleOffset: 100, boxOffset: 10 })

  return (
    <div className={css.container} onMouseLeave={() => { setDd(prev => ({ ...prev, inView: false })) }}>
      <div className={css.navbar}>
        <Breadcrumbs
          sectionContent={sectionContent}
          setDd={setDd}
        />
        <Toolbar />
      </div>
      <DropDownNav
        module={module}
        modulesInfo={modulesInfo}
        sectionContent={sectionContent}
        dd={dd}
      />
    </div>
  )
}