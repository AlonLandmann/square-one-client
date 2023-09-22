import css from '@/scss/study/DropDownNav.module.scss'

export default function DropDownNav({ module, dd }) {
  return (
    <div className={css.container} style={{ opacity: dd.inView ? '1' : '0' }}>
      <div className={css.triangle} style={{ marginLeft: `${dd.triangleOffset}px`}}></div>
      <div className={css.content} style={{ marginLeft: `${dd.boxOffset}px`}}></div>
    </div>
  )
}