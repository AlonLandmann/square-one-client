import css from '@/scss/study/Breadcrumbs.module.scss'

export default function Breadcrumbs({ sectionContent, setDd, setDdOffsets }) {
  function handleEnter(event, type) {
    const { offsetLeft, offsetWidth } = event.target
    const triangleOffset = offsetLeft + 0.5 * offsetWidth - 8
    const contentOffset = Math.max(0, triangleOffset - 192)

    setDd(type)
    setDdOffsets({ triangle: triangleOffset, content: contentOffset })
  }

  return (
    <div className={css.container}>
      <div
        className={css.logo}
        onMouseEnter={() => { setDd(null) }}
        onClick={() => { location.replace('/') }}
      >
        <i className='bi bi-1-square'></i>
        <div>Square One</div>
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.module} onMouseEnter={(e) => { handleEnter(e, 'modules') }}>
        {sectionContent.module.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.chapter} onMouseEnter={(e) => { handleEnter(e, 'chapters') }}>
        {sectionContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section} onMouseEnter={(e) => { handleEnter(e, 'sections') }}>
        {sectionContent.section.name}
      </div>
    </div>
  )
}