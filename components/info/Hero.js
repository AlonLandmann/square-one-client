import TeX from '@/components/parser/TeX'
import css from '@/scss/info/Hero.module.scss'

export default function Hero({ module }) {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.title}>
          <div className={css.id}>M1</div>
          <div>Logical Foundations</div>
        </div>
        <div className={css.headline}>The basics of mathematical logic and inference. Includes a complete coverage of first order predicate logic.</div>
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
          <div className={css.start}>
            <i className='bi bi-play-fill'></i>
            <div>Start Course</div>
          </div>
          <div className={css.youtube}>
            <i className='bi bi-youtube'></i>
            <div>YouTube Series</div>
          </div>
        </div>
      </div>
      <div className={css.icon}>
        <TeX tex='[P\implies Q]' />
      </div>
    </div>
  )
}