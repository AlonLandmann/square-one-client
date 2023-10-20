import { v4 as uuid } from 'uuid'
import { putUser } from '@/db/dbFetch'
import { addModule } from '@/lib/userProgress'
import ProgressBar from '@/components/common/ProgressBar'
import { getSectionProgress } from '@/lib/userProgress'
import css from '@/scss/info/Contents.module.scss'

export default function Contents({ user, module }) {
  const handleSectionNav = async (unit) => {
    if (!user || user.modules.filter(m => m.id === module.id).length !== 0) {
      location.replace(`/${module.pathName}/${unit.chapter}/${unit.section}`)
    } else  {
      await putUser(user.email, addModule(user, module), () => {
        location.replace(`/${module.pathName}/${unit.chapter}/${unit.section}`)
      })
    }
  }

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.headline}>CONTENTS</div>
        <div className={css.divider}></div>
        {module.script.map(unit => {
          if (unit.type === 'heading') {
            return (
              <div key={uuid()} className={css.chapter}>
                <div className={css.number}>{unit.chapter}</div>
                <div className={css.name}>{unit.content}</div>
              </div>
            )
          }
          if (unit.type === 'subheading') {
            return (
              <div key={uuid()} className={css.section} onClick={() => { handleSectionNav(unit) }}>
                <div className={css.number}>{unit.chapter}.{unit.section}</div>
                <div className={css.name}>{unit.content}</div>
                {user &&
                  <ProgressBar progress={getSectionProgress(user, module, unit)} />
                }
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}