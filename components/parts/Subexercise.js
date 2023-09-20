import { useState } from 'react'
import TeX from '@/components/parser/TeX'
import Solution from '@/components/parts/Solution'
import css from '@/scss/parts/Subexercise.module.scss'

export default function Subexercise({ unit, j }) {
  const [solutionInView, setSolutionInView] = useState(false)

  return (
    <div className={css.container}>
      <div className={css.withoutSolution} onClick={() => { setSolutionInView(prev => !prev) }}>
        <div className={css.number}>{j + 1}</div>
        <div className={css.content}><TeX tex={unit.parts[j].content} /></div>
      </div>
      {solutionInView &&
        <Solution solution={unit.parts[j].solution} />
      }
    </div>
  )
}