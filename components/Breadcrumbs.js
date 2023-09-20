import css from '@/scss/Breadcrumbs.module.scss'

export default function Breadcrumbs({ module, chapterNr, sectionNr }) {
  return (
    <div className={css.container}>
        <div className={css.logo}>
          <i className='bi bi-1-square'></i>
          {/* <div>Square One</div> */}
        </div>
        <div><i className='bi bi-slash-lg'></i></div>
        <div className={css.module}>
          {module.displayName}
        </div>
        <div><i className='bi bi-slash-lg'></i></div>
        <div className={css.chapter}>
          Chapter Name
        </div>
        <div><i className='bi bi-slash-lg'></i></div>
        <div className={css.section}>
          Section Name
        </div>
      </div>
  )
}