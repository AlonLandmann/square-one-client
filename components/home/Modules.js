import { v4 as uuid } from 'uuid'
import css from '@/scss/home/Modules.module.scss'

export default function Modules({ moduleCatalogue }) {
  return (
    <div className={css.container}>
      <div className={css.headline}>COURSES</div>
      <div className={css.divider}></div>
      <div className={css.banners}>
        {moduleCatalogue.map(module => (
          <div
            key={uuid()}
            className={css.banner}
            onClick={() => { location.replace(`/${module.pathName}`) }}
          >
            {module.displayName}
          </div>
        ))}
      </div>
    </div>
  )
}