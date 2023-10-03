import { useState } from 'react'
import Breadcrumbs from '@/components/study/Breadcrumbs'
import Toolbar from '@/components/study/Toolbar'
import DropDownNav from '@/components/study/DropDownNav'
import css from '@/scss/study/Navbar.module.scss'

export default function Navbar({ module, modulesInfo, localContent, setIsLoading,
  dropDown, setDropDown, rightSide, setRightSide, user }) {

  const [dropDownOffset, setDropDownOffset] = useState(null)

  return (
    <>
      <div className={css.navbar}>
        <Breadcrumbs
          localContent={localContent}
          setDropDown={setDropDown}
          setDropDownOffset={setDropDownOffset}
        />
        <Toolbar
          setDropDown={setDropDown}
          rightSide={rightSide}
          setRightSide={setRightSide}
        />
      </div>
      <DropDownNav
        module={module}
        modulesInfo={modulesInfo}
        localContent={localContent}
        setIsLoading={setIsLoading} 
        dropDown={dropDown}
        setDropDown={setDropDown}
        dropDownOffset={dropDownOffset}
        user={user}
      />
    </>
  )
}