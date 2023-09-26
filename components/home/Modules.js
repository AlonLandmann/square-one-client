import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import css from '@/scss/home/Modules.module.scss'

export default function Modules({ modulesInfo }) {
  const router = useRouter()

  return (
    <div className={css.container}>
      <div className={css.headline}>COURSES</div>
      <div className={css.divider}></div>
      <div className={css.banners}>
        {modulesInfo.map(module => (
          <div
            key={uuid()}
            className={css.banner}
            onClick={() => { router.push(`/${module.pathName}`) }}
          >
            {module.displayName}
          </div>
        ))}</div>
    </div>
  )
}