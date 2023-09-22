import css from '@/scss/study/DropDownNav.module.scss'

export default function DropDownNav({ module, dd }) {
  return (
    <div className={css.container} style={{ opacity: dd.inView ? '1' : '0', left: `${dd.boxOffset}px` }}>
      <div className={css.triangle} style={{ left: `${dd.triangleOffset - dd.boxOffset}px`}}></div>
      <div className={css.content}></div>
    </div>
  )
}