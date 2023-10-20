import { v4 as uuid } from 'uuid'
import css from '@/scss/home/Modules.module.scss'
import Link from 'next/link'
import { getModuleProgress } from '@/lib/userProgress'

export default function Modules({ user, moduleCatalogue }) {
  return (
    <div className={css.container}>
      <div className={css.headline}>COURSES</div>
      <div className={css.divider}></div>
      <div className={css.banners}>
        {moduleCatalogue.map(module => (
          <Link key={uuid()} href={`/${module.pathName}`} className={css.banner}>
            {user &&
              <div
                className={css.progressOverlay}
                style={{ width: `${Math.floor(getModuleProgress(user, module) * 100)}%` }}
              >

              </div>
            }
            <div>
              {module.displayName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}