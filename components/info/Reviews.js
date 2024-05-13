import css from '@/scss/info/Reviews.module.scss'

export default function Reviews({ module }) {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.headline}>REVIEWS</div>
        <div className={css.divider}></div>
        <div className={css.reviews}>
          <div className={css.review}>
            <div className={css.topLine}>
              <div className={css.stars}>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-half'></i></div>
              </div>
              <div className={css.title}>Review 1</div>
            </div>
            <div className={css.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={css.bottomLine}>
              <div className={css.user}>oogway</div>
              <div className={css.circle}><i className='bi bi-circle-fill'></i></div>
              <div className={css.date}>12.06.2022</div>
            </div>
          </div>
          <div className={css.review}>
            <div className={css.topLine}>
              <div className={css.stars}>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-half'></i></div>
                <div><i className='bi bi-star'></i></div>
              </div>
              <div className={css.title}>Review 2</div>
            </div>
            <div className={css.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={css.bottomLine}>
              <div className={css.user}>oogway</div>
              <div className={css.circle}><i className='bi bi-circle-fill'></i></div>
              <div className={css.date}>12.06.2022</div>
            </div>
          </div>
          <div className={css.review}>
            <div className={css.topLine}>
              <div className={css.stars}>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
                <div><i className='bi bi-star-fill'></i></div>
              </div>
              <div className={css.title}>Review 3</div>
            </div>
            <div className={css.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={css.bottomLine}>
              <div className={css.user}>oogway</div>
              <div className={css.circle}><i className='bi bi-circle-fill'></i></div>
              <div className={css.date}>12.06.2022</div>
            </div>
          </div>
        </div>
        <div className={css.prompt}>
          <div className={css.promptContent}>
            <i className='bi bi-feather'></i>
            <div>Leave a review</div>
          </div>
        </div>
      </div>
    </div>
  )
}