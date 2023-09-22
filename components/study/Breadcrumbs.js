import css from '@/scss/study/Breadcrumbs.module.scss'

export default function Breadcrumbs({ sectionContent, setDd }) {
  function showDd(event, typeInView) {
    const { offsetLeft, offsetWidth } = event.target

    const triangleOffset = offsetLeft + 0.5 * offsetWidth - 8
    const boxOffset = Math.max(0, triangleOffset - 192)

    setDd({ inView: typeInView, triangleOffset, boxOffset })
  }

  return (
    <div className={css.container}>
      <div className={css.logo} onMouseEnter={(e) => { showDd(e, 'logo') }}>
        <i className='bi bi-1-square'></i>
        <div>Square One</div>
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.module} onMouseEnter={(e) => { showDd(e, 'modules') }}>
        {sectionContent.module.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.chapter} onMouseEnter={(e) => { showDd(e, 'chapters') }}>
        {sectionContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section} onMouseEnter={(e) => { showDd(e, 'sections') }}>
        {sectionContent.section.name}
      </div>
    </div>
  )
}