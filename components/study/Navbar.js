import css from '@/scss/study/Navbar.module.scss'
import Breadcrumbs from './Breadcrumbs'
import Toolbar from './Toolbar'
import { useState } from 'react'
import DropDownNav from './DropDownNav'

export default function Navbar({ module, modulesInfo, sectionContent, dd, setDd, setIsLoading, rightSide, setRightSide }) {
  const [ddOffset, setDdOffset] = useState(0)

  return (
    <>
      <div className={css.navbar}>
        <Breadcrumbs
          sectionContent={sectionContent}
          setDd={setDd}
          setDdOffset={setDdOffset}
        />
        <Toolbar
          setDd={setDd}
          rightSide={rightSide}
          setRightSide={setRightSide}
        />
      </div>
      <DropDownNav
        module={module}
        modulesInfo={modulesInfo}
        sectionContent={sectionContent}
        dd={dd}
        setDd={setDd}
        ddOffset={ddOffset}
        setIsLoading={setIsLoading}
      />
    </>
  )
}