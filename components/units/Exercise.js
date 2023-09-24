import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { capitalize } from 'lodash'
import TeX from '@/components/parser/TeX'
import Solution from '@/components/parts/Solution'
import Subexercise from '@/components/parts/Subexercise'
import css from '@/scss/units/Exercise.module.scss'

export default function Exercise({ unit }) {
  const [solutionInView, setSolutionInView] = useState(false)

  return (
    <div className={css.container}>
      <div className={css.headline}>
        <div className={css.type}>{capitalize(unit.type)}</div>
        <div className={css.number}>{unit.number}.</div>
        <div className={css.name}>{unit.name}</div>
      </div>
      <div 
        className={`${css.content} ${!unit.parts ? css.interactive : ''}`}
        onClick={() => { setSolutionInView(prev => !prev) }}
      >
        <TeX tex={unit.content} />
      </div>
      {!unit.parts && solutionInView &&
        <Solution solution={unit.solution} />
      }
      {unit.parts &&
        <div className={css.parts}>
          {unit.parts.map((_, j) => {
            if (unit.selectedSub === undefined || unit.selectedSub === j) {
              return <Subexercise key={uuid()} unit={unit} j={j} />
            }
          })}
        </div>
      }
    </div>
  )
}