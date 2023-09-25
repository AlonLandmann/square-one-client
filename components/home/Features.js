import css from '@/scss/home/Features.module.scss'

export default function Features() {
  return (
    <div className={css.container}>
      <div className={css.headline}>WHY SQUARE ONE?</div>
      <div className={css.divider}></div>
      <div className={css.features}>
        <div className={css.feature}>
          <div className={css.icon}><i className='bi bi-book'></i></div>
          <div className={css.heading}>Quality Content</div>
          <div className={css.description}>Square One courses are as thorough as textbooks, but also concise and to the point.</div>
        </div>
        <div className={css.feature}>
          <div className={css.icon}><i className='bi bi-layers'></i></div>
          <div className={css.heading}>Live Reference Stack</div>
          <div className={css.description}>References to previous results are available immediately and conveniently. No more leafing or scrolling required.</div>
        </div>
        <div className={css.feature}>
          <div className={css.icon}><i className='bi bi-journal-bookmark'></i></div>
          <div className={css.heading}>LaTeX Note-Taking</div>
          <div className={css.description}>Conveniently take notes using the universally accepted LaTeX standard.</div>
        </div>
      </div>
    </div>
  )
}