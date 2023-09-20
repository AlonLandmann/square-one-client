import Link from 'next/link'
import css from '@/scss/HomeRoot.module.scss'

export default function HomeRoot() {
  return (
    <div className={css.root}>
      <Link href='/study/logical-foundations'>Logical Foundations</Link>
    </div>
  )
}