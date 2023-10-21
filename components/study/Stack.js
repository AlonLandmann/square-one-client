import { cloneDeep } from 'lodash'
import { v4 as uuid } from 'uuid'
import Text from '@/components/units/Text'
import Notion from '@/components/units/Notion'
import Definition from '@/components/units/Definition'
import Axiom from '@/components/units/Axiom'
import Theorem from '@/components/units/Theorem'
import Rule from '@/components/units/Rule'
import Example from '@/components/units/Example'
import Exercise from '@/components/units/Exercise'
import css from '@/scss/study/Stack.module.scss'

export default function Stack({ setRightSide, stack, setStack }) {
  function remove(unitIndex) {
    setStack(prev => prev.filter(unit => unit.index !== unitIndex))
  }

  function expand(unitIndex) {
    setStack(prev => prev.map(unit => {
      if (unit.index === unitIndex) {
        if (typeof unit.selectedSub === 'number') {
          unit.hiddenSubSelection = unit.selectedSub
          delete unit.selectedSub
        } else {
          unit.selectedSub = unit.hiddenSubSelection
          delete unit.hiddenSubSelection
        }
      }

      return unit
    }))
  }

  function moveUp(stackIndex) {
    setStack(prev => {
      let newStack = cloneDeep(prev)

      newStack[stackIndex - 1] = prev[stackIndex]
      newStack[stackIndex] = prev[stackIndex - 1]

      return newStack
    })
  }

  function moveDown(stackIndex) {
    setStack(prev => {
      let newStack = cloneDeep(prev)

      newStack[stackIndex + 1] = prev[stackIndex]
      newStack[stackIndex] = prev[stackIndex + 1]

      return newStack
    })
  }

  return (
    <div className={css.container}>
      {stack.length === 0 &&
        <div className={css.filler}>
          <i className='bi bi-layers'></i>
          <div>Reference stack is empty.</div>
          <div className={css.addButton} onClick={() => { setRightSide('core') }}>
            add
          </div>
        </div>
      }
      {stack.map((unit, i) => (
        <div key={uuid()} className={css.stackItem}>
          <div className={css.unit}>
            {unit.type === 'text' && <Text unit={unit} />}
            {unit.type === 'notion' && <Notion unit={unit} />}
            {unit.type === 'definition' && <Definition unit={unit} />}
            {unit.type === 'axiom' && <Axiom unit={unit} />}
            {unit.type === 'theorem' && <Theorem unit={unit} />}
            {unit.type === 'rule' && <Rule unit={unit} />}
            {unit.type === 'example' && <Example unit={unit} />}
            {unit.type === 'exercise' && <Exercise unit={unit} />}
          </div>
          <div className={css.buttons}>
            <div onClick={() => { remove(unit.index) }}>
              <i className='bi bi-trash3'></i>
            </div>
            {(typeof unit.selectedSub === 'number' || typeof unit.hiddenSubSelection === 'number') &&
              <div onClick={() => { expand(unit.index) }}>
                <i className={`bi bi-arrows-${typeof unit.selectedSub === 'number' ? 'expand' : 'collapse'}`}></i>
              </div>
            }
            {i > 0 &&
              <div onClick={() => { moveUp(i) }}>
                <i className='bi bi-arrow-up'></i>
              </div>
            }
            {i < stack.length - 1 &&
              <div onClick={() => { moveDown(i) }}>
                <i className='bi bi-arrow-down'></i>
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  )
}