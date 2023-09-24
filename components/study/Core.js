import { v4 as uuid } from 'uuid'
import pinToTop from '@/lib/pinToTop'
import css from '@/scss/study/Core.module.scss'

export default function Core({ module, setRightSide, stack, setStack }) {
  const core = module.script.filter(unit => unit.number)

  function toggle(unit) {
    setStack(prev => pinToTop(unit, prev))
    setRightSide('stack')
  }

  return (
    <div className={css.container}>
      {core.map(unit => (
        <div key={uuid()} className={css.item} onClick={() => { toggle(unit) }}>
          <div className={css.number}>{unit.number}</div>
          <div className={css.name}>{unit.name}</div>
          <div className={css.add}>
            {stack.filter(u => u.index === unit.index).length > 0 &&
              <i className='bi bi-check2'></i>
            }
          </div>
        </div>
      ))}
    </div>
  )
}