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


export default function Stack({ stack, setStack }) {
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

  return (
    <div className={css.container}>
      {stack.map(unit => (
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
            {(typeof unit.selectedSub === 'number' || typeof unit.hiddenSubSelection === 'number') &&
              <div className={css.expandButton} onClick={() => { expand(unit.index) }}>
                <i className={`bi bi-arrows-${typeof unit.selectedSub === 'number' ? 'expand' : 'collapse'}`}></i>
              </div>
            }
            <div className={css.removeButton} onClick={() => { removeFromStack(unit.index) }}>
              <i className='bi bi-trash3'></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}