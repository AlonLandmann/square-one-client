import css from '@/scss/study/Toolbar.module.scss'

export default function Toolbar({ setDropDown, rightSide, setRightSide }) {
  return (
    <div className={css.container} onMouseEnter={() => { setDropDown(null) }}>
      <div
        className={rightSide === 'notes' ? css.selected : ''}
        onClick={() => { setRightSide('notes') }}
      >
        <i className='bi bi-pen'></i>
      </div>
      <div
        className={rightSide === 'core' ? css.selected : ''}
        onClick={() => { setRightSide('core') }}
      >
        <i className='bi bi-list'></i>
      </div>
      <div
        className={rightSide === 'stack' ? css.selected : ''}
        onClick={() => { setRightSide('stack') }}
      >
        <i className='bi bi-layers'></i>
      </div>
    </div>
  )
}