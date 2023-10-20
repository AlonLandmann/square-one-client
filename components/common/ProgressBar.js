import css from '@/scss/study/ProgressBar.module.scss'

export default function ProgressBar({ progress }) {
  return (
    <div className={css.container}>
      <div className={css.progressBar} style={{ width: `${100 * progress}%` }}></div>
    </div>
  )
}