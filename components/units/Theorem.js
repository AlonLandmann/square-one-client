import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { capitalize } from 'lodash'
import TeX from '@/components/parser/TeX'
import Proof from '@/components/parts/Proof'
import Subtheorem from '@/components/parts/Subtheorem'
import css from '@/scss/units/Theorem.module.scss'

export default function Theorem({ unit }) {
  const [proofInView, setProofInView] = useState(false)

  return (
    <div className={css.container}>
      <div className={css.headline}>
        <div className={css.type}>{capitalize(unit.type)}</div>
        <div className={css.number}>{unit.number}.</div>
        <div className={css.name}>{unit.name}</div>
      </div>
      <div
        className={`${css.content} ${!unit.parts ? css.interactive : ''}`}
        onClick={() => { setProofInView(prev => !prev) }}
      >
        <TeX tex={unit.content} />
      </div>
      {!unit.parts && proofInView &&
        <Proof proof={unit.proof} />
      }
      {unit.parts &&
        <div className={css.parts}>
          {unit.parts.map((_, j) => {
            if (unit.selectedSub === undefined || unit.selectedSub === j) {
              return <Subtheorem key={uuid()} unit={unit} j={j} />
            }
          })}
        </div>
      }
    </div>
  )
}