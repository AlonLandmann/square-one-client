import { v4 as uuid } from 'uuid'
import pinToTop from '@/lib/pinToTop'
import css from '@/scss/study/Core.module.scss'

export default function Core({ module, localContent, setRightSide, stack, setStack }) {
  let core = []
  let stopNext = false
  
  for (let i = 0; i < module.script.length; i++) {
    const unit = module.script[i]

    if (unit.chapter === localContent.chapter.nr && unit.section === localContent.section.nr) {
      stopNext = true
    } else if (stopNext) {
      break;
    }
    
    if (unit.number || unit.type === 'heading') {
      core.push(unit)
    }
  }

  function toggle(unit) {
    setStack(prev => pinToTop(unit, prev))
    setRightSide('stack')
  }

  return (
    <div className={css.container}>
      {core.map(unit => (
        <>
          {unit.type === 'heading' &&
            <div key={uuid()} className={css.chapter}>
              {unit.content}
            </div>
          }
          {unit.type !== 'heading' &&
            <div key={uuid()} className={css.item} onClick={() => { toggle(unit) }}>
              <div className={css.number}>{unit.number}</div>
              <div className={css.name}>{unit.name}</div>
              <div className={css.add}>
                {stack.filter(u => u.index === unit.index).length > 0 &&
                  <i className='bi bi-check2'></i>
                }
              </div>
            </div>
          }
        </>

      ))}
    </div>
  )
}