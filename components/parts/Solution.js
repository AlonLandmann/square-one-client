import TeX from '@/components/parser/TeX'
import css from '@/scss/parts/Solution.module.scss'

export default function Solution({ solution }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>solution</div>
      <TeX tex={solution} />
    </div>
  )
}