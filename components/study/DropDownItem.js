import ProgressBar from '@/components/common/ProgressBar'
import css from '@/scss/study/DropDownItem.module.scss'

export default function DropDownItem({ user, selected, navFunction, number, content, progress }) {
  return (
    <div
      className={`${css.container} ${selected ? css.selected : ''}`}
      onClick={(e) => { e.stopPropagation(); navFunction() }}
    >
      <div className={css.number}>{number}</div>
      <div>{content}</div>
      {user && <ProgressBar progress={progress} />}
    </div>
  )
}