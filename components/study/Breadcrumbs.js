import css from '@/scss/study/Breadcrumbs.module.scss'

export default function Breadcrumbs({ localContent, setDropDown, setDropDownOffset }) {
  function handleEnter(event, navType) {
    const { offsetLeft, offsetWidth } = event.target
    const triangleOffset = offsetLeft + 0.5 * offsetWidth - 8
    const contentOffset = Math.max(6, triangleOffset - 192)

    setDropDown(navType)
    setDropDownOffset(contentOffset)
  }

  return (
    <div className={css.container}>
      <div className={css.logo}
        onMouseEnter={() => { setDropDown(null) }}
        onClick={() => { location.replace('/') }}
      >
        <i className='bi bi-1-square'></i>
        <div>Square One</div>
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.module} onMouseEnter={(e) => { handleEnter(e, 'modules') }}>
        {localContent.module.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.chapter} onMouseEnter={(e) => { handleEnter(e, 'chapters') }}>
        {localContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section} onMouseEnter={(e) => { handleEnter(e, 'sections') }}>
        {localContent.section.name}
      </div>
    </div>
  )
}