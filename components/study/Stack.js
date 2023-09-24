import css from '@/scss/study/Stack.module.scss'
import { v4 as uuid } from 'uuid'
import Text from '../units/Text'
import Notion from '../units/Notion'
import Definition from '../units/Definition'
import Axiom from '../units/Axiom'
import Theorem from '../units/Theorem'
import Example from '../units/Example'
import Exercise from '../units/Exercise'
import Rule from '../units/Rule'
import { cloneDeep } from 'lodash'


export default function Stack({ stack, setStack, setRightSide }) {
  function expand(index) {
    setStack(prev => prev.map(unit => {
      if (unit.index === index) {
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
  function removeFromStack(index) {
    setStack(prev => prev.filter(unit => unit.index !== index))
  }
  function moveUp(i) {
    setStack(prev => {
      let newStack = cloneDeep(prev)

      newStack[i - 1] = prev[i]
      newStack[i] = prev[i - 1]

      return newStack
    })
  }
  function moveDown(i) {
    setStack(prev => {
      let newStack = cloneDeep(prev)

      newStack[i + 1] = prev[i]
      newStack[i] = prev[i + 1]

      return newStack
    })
  }

  return (
    <div className={css.container}>
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
            <div onClick={() => { removeFromStack(unit.index) }}>
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
      {stack.length === 0 &&
        <div className={css.filler}>
          <i className='bi bi-layers'></i>
          <div>Reference stack is empty.</div>
          <button onClick={() => { setRightSide('core') }}>add</button>
        </div>
      }
    </div>
  )
}