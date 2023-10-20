import TeX from '@/components/parser/TeX'
import { putUser } from '@/db/dbFetch'
import { addModule, getModuleProgress, getSections } from '@/lib/userProgress'
import css from '@/scss/info/Hero.module.scss'

export default function Hero({ user, module }) {
  const handleStart = async () => {
    if (!user) {
      location.replace(`${module.pathName}/1/1`)
    } else if (user.modules.filter(m => m.id === module.id).length === 0) {
      await putUser(user.email, addModule(user, module), () => {
        location.replace(`${module.pathName}/1/1`)
      })
    } else {
      const sections = getSections(user, module)

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].status === 'unread') {
          location.replace(`${module.pathName}/${sections[i].chapterNr}/${sections[i].sectionNr}`)

          return
        }
      }

      location.replace(`${module.pathName}/1/1`)
    }
  }

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.title}>
          <div className={css.id}>M{module.id}</div>
          <div>{module.displayName}</div>
        </div>
        <div className={css.headline}>{module.description}</div>
        <div className={css.stats}>
          <div className={css.reviews}>
            <div className={css.stars}>
              <div><i className='bi bi-star-fill'></i></div>
              <div><i className='bi bi-star-fill'></i></div>
              <div><i className='bi bi-star-fill'></i></div>
              <div><i className='bi bi-star-fill'></i></div>
              <div><i className='bi bi-star-half'></i></div>
            </div>
            <div className={css.reviewers}>2078 reviews</div>
          </div>
          <div className={css.circle}><i className='bi bi-circle-fill'></i></div>
          <div className={css.students}>10'145 students</div>
        </div>
        <div className={css.buttons}>
          <div className={css.start} onClick={handleStart}>
            <i className='bi bi-book-half'></i>
            {user && user.modules.filter(m => m.id === module.id).length > 0
              ? getModuleProgress(user, module) === 1
                ? <div>
                    Look Back{' '}
                    · {Math.floor(getModuleProgress(user, module) * 100)}%
                  </div>
                : <div>
                    Continue Studying{' '}
                    · {Math.floor(getModuleProgress(user, module) * 100)}%
                  </div>
              : <div>Start Course</div>
            }
          </div>
          <div className={css.youtube}>
            <i className='bi bi-youtube'></i>
            <div>YouTube Series</div>
          </div>
        </div>
      </div>
      <div className={css.icon}>
        <TeX tex={module.icon} />
      </div>
    </div>
  )
}