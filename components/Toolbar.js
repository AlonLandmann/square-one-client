import css from '@/scss/Toolbar.module.scss'

export default function Toolbar() {
  return (
    <div className={css.container}>
      <div><i className='bi bi-crosshair'></i></div>
      <div><i className='bi bi-moon-fill'></i></div>
      <div><i className='bi bi-gear-fill'></i></div>
    </div>
  )
}