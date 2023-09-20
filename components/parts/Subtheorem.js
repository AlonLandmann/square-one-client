import { useState } from 'react'
import TeX from '@/components/parser/TeX'
import Proof from '@/components/parts/Proof'
import css from '@/scss/parts/Subtheorem.module.scss'

export default function Subtheorem({ unit, j }) {
  const [proofInView, setProofInView] = useState(false)

  return (
    <div className={css.container}>
      <div className={css.withoutProof} onClick={() => { setProofInView(prev => !prev) }}>
        <div className={css.number}>{j + 1}</div>
        <div className={css.content}><TeX tex={unit.parts[j].content} /></div>
      </div>
      {proofInView &&
        <Proof proof={unit.parts[j].proof} />
      }
    </div>
  )
}