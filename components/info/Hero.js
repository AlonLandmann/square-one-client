import { useRouter } from 'next/router'
import TeX from '@/components/parser/TeX'
import css from '@/scss/info/Hero.module.scss'

export default function Hero({ module }) {
  const router = useRouter()

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
          <div className={css.start} onClick={() => { router.push(`${module.pathName}/1/1`) }}>
            <i className='bi bi-book-half'></i>
            <div>Start Course</div>
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