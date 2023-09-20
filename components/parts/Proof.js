import TeX from '@/components/parser/TeX'
import css from '@/scss/parts/Proof.module.scss'

export default function Proof({ proof }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>proof</div>
      <TeX tex={proof} />
      <div className={css.qed}><i className='bi bi-square-fill'></i></div>
    </div>
  )
}