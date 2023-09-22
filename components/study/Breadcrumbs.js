import css from '@/scss/study/Breadcrumbs.module.scss'

export default function Breadcrumbs({ sectionContent, setDd }) {
  function showDd(event) {
    const { offsetLeft, offsetWidth } = event.target

    const triangleOffset = offsetLeft + 0.5 * offsetWidth - 8
    const boxOffset = Math.max(0, triangleOffset - 192)

    setDd({ inView: true, triangleOffset, boxOffset })
  }

  return (
    <div className={css.container}>
      <div className={css.logo} onMouseEnter={showDd}>
        <i className='bi bi-1-square'></i>
        <div>Square One</div>
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.module} onMouseEnter={showDd}>
        {sectionContent.module.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.chapter} onMouseEnter={showDd}>
        {sectionContent.chapter.nr}{' '}
        {sectionContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section} onMouseEnter={showDd}>
        {sectionContent.section.nr}{' '}
        {sectionContent.section.name}
      </div>
    </div>
  )
}