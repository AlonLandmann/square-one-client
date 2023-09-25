import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import css from '@/scss/home/Modules.module.scss'

export default function Modules({ modulesInfo }) {
  const router = useRouter()

  return (
    <div className={css.container}>
      {modulesInfo.map(module => (
        <div
          key={uuid()}
          className={css.banner}
          onClick={() => { router.push(`/${module.pathName}/1/1`) }}
        >
          {module.displayName}
        </div>
      ))}
    </div>
  )
}