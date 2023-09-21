import css from '@/scss/study/Breadcrumbs.module.scss'
import { useRouter } from 'next/router'

export default function Breadcrumbs({ sectionContent }) {
  const router = useRouter()

  function navToPrevious() {
    if (sectionContent.previous) {
      router.push(sectionContent.previous)
    }
  }

  function navToNext() {
    if (sectionContent.next) {
      router.push(sectionContent.next)
    }
  }

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
        {sectionContent.chapter.name}
      </div>
      <div><i className='bi bi-slash-lg'></i></div>
      <div className={css.section}>
        {sectionContent.section.name}
      </div>
      <div className={css.navs}>
        <div onClick={navToPrevious}>
          <i className='bi bi-chevron-left'></i>
        </div>
        <div onClick={navToNext}>
          <i className='bi bi-chevron-right'></i>
        </div>
      </div>
    </div>
  )
}