import css from '@/scss/info/Objectives.module.scss'

export default function Objectives({ module }) {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.headline}>LEARNING OBJECTIVES</div>
        <div className={css.divider}></div>
        <div className={css.objectives}>
          <div className={css.objective}>
            <i className='bi bi-circle-fill'></i>
            <div>Sentential Connectives</div>
          </div>
          <div className={css.objective}>
            <i className='bi bi-circle-fill'></i>
            <div>Propositional Logic</div>
          </div>
          <div className={css.objective}>
            <i className='bi bi-circle-fill'></i>
            <div>Terms, Predicates, and Quantifiers</div>
          </div>
          <div className={css.objective}>
            <i className='bi bi-circle-fill'></i>
            <div>Predicate Logic</div>
          </div>
        </div>
      </div>
    </div>
  )
}