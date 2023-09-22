import css from '@/scss/study/Breadcrumbs.module.scss'

export default function Breadcrumbs({ sectionContent }) {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <i className='bi bi-1-square'></i>
        {/* <div>Square One</div> */}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.module}>
        {sectionContent.module.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.chapter}>
        {sectionContent.chapter.nr}{' '}
        {sectionContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section}>
        {sectionContent.chapter.nr}.
        {sectionContent.section.nr}{' '}
        {sectionContent.section.name}
      </div>
    </div>
  )
}