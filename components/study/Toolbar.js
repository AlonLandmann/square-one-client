import css from '@/scss/study/Toolbar.module.scss'

export default function Toolbar({ setDd }) {
  return (
    <div className={css.container} onMouseEnter={() => { setDd(null) }}>
      <div><i className='bi bi-crosshair'></i></div>
      <div><i className='bi bi-moon-fill'></i></div>
      <div><i className='bi bi-gear-fill'></i></div>
    </div>
  )
}